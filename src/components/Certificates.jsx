import React, { useCallback, useMemo, useState } from "react";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { CgCloseO } from "react-icons/cg";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Layout as DashboardLayout } from "../section/dashboard/layout";
import { CertificatesTable } from "../section/table";
import { CustomersSearch } from "../section/customers-search";
import { applyPagination } from "../utils/apply-pagination";
import { useParams } from "react-router";
import { useEffect } from "react";
import Modal from "react-modal";
import axios from "../setup/api/axios";
import useAuth from "../setup/hooks/useAuth";
import { useRef } from "react";
import Papa from 'papaparse';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("body");

const Certificates = () => {
  const { id } = useParams();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [certi, setCerti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [exdate, setExdate] = useState("");
  const { auth } = useAuth();
  const [csvData, setCsvData] = useState([]);

  const importFile = useRef(null);

  let DataToShow = [];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("/certificates", {
          eventid: id,
        });
        const resultList = response.data;
        resultList.reverse();
        setCerti([...resultList]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const useCerti = (page, rowsPerPage) => {
    return useMemo(() => {
      return applyPagination(certi, page, rowsPerPage, setPage);
    }, [certi, page, rowsPerPage]);
  };

  const AddCertificate = async () => {
    setLoading(true);
    const response = await axios.post("/certificates/add", {
      username: name,
      eventid: id,
      expiry: exdate,
      email: email,
      user: auth.user,
    });
    setLoading(false);
    const result = response.data;
    setName("");
    setEmail("");
    setCerti([result, ...certi]);
  };

  DataToShow = useCerti(page, rowsPerPage);

  const csvUpload = async(e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: async function (results) {
        results.data.forEach(async(certi)=>{
          const response = await axios.post("/certificates/add", {
            username: certi.name,
            eventid: id,
            expiry: certi.exdate,
            email: certi.email,
            user: auth.user,
          });
          const result = response.data;
          setCerti([result, ...certi]);
        })
      },
    });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Event Details"
      >
        <div className="flex text-2xl items-center">
          <h1 className="font-md">Certificate Details</h1>
          <button className="ml-auto" onClick={closeModal}>
            <span className="text-red-700 font-bold">
              <CgCloseO />
            </span>
          </button>
        </div>
        <div>
          <div>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              className="border-2 outline-none h-14 rounded-md my-2 p-4"
            ></input>
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email Address"
              className="border-2 outline-none h-14 rounded-md my-2 p-4"
            ></input>
          </div>
          <div>
            <input
              type="date"
              value={exdate}
              onChange={(e) => {
                setExdate(e.target.value);
              }}
              placeholder="Expiry Date"
              className="border-2 outline-none h-14 rounded-md my-2 p-4"
            ></input>
          </div>
          <div>
            <button
              onClick={AddCertificate}
              className="ml-auto mr-4 px-4 py-2 rounded-lg bg-purple-gradient text-white"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
      <div>
        <title>Certificates</title>
      </div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Candidates Name</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <input
                    ref={importFile}
                    onChange={csvUpload}
                    type="file"
                    accept={[".csv"]}
                    style={{ display: "none" }}
                  ></input>
                  <Button
                    onClick={() => {
                      importFile.current.click();
                    }}
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Import CSV
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Export CSV
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  onClick={openModal}
                  variant="contained"
                >
                  Add Certificate
                </Button>
              </div>
            </Stack>
            <CustomersSearch />
            <CertificatesTable
              count={certi.length}
              items={DataToShow}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Certificates.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Certificates;
