import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";
import axios from "../setup/api/axios";
import EventRow from "./EventRow";
import Modal from "react-modal";
import useAuth from "../setup/hooks/useAuth";

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

const Events = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { auth } = useAuth();
  const [Events, setEvents] = useState([]);
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("/events", {
          user:auth.user,
        });
        const resultList = response.data;
        console.log(resultList);
        setEvents([...resultList]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const AddEvent = async () => {
    const response = await axios.post("/events/add", {
      user: auth.user,
      name:name
    });
    const result = await response.data;
    console.log(result);
    setName("");
    setEvents([...Events, result]);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="pr-2">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Event Details"
      >
        <div className="flex text-2xl items-center">
          <h1 className="font-md">Event Details</h1>
          <button className="ml-auto" onClick={closeModal}>
            <span className="text-red-700 font-bold">
              <CgCloseO />
            </span>
          </button>
        </div>
        <div>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Event Name"
            className="border-2 outline-none h-14 rounded-md my-2 p-4"
          ></input>
          <div>
            <button
              onClick={AddEvent}
              className="ml-auto mr-4 px-4 py-2 rounded-lg bg-purple-gradient text-white"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex text-5xl font-bold ml-4">
        <h1>Events</h1>
        <button
          onClick={openModal}
          className="ml-auto mr-4 p-4 bg-purple-gradient text-white rounded-md"
        >
          <div className="flex justify-evenly text-lg items-center border-6">
            <FaPlus />
            <span className="ml-2">Add Event</span>
          </div>
        </button>
      </div>
      <div className="h-14 px-4 flex rounded-md border-2 items-center mt-8 ml-4 text-lg min-w-[180px] w-[50%]">
        <BsSearch />
        <input
          className="ml-4 outline-none w-full"
          placeholder="Search Event"
        ></input>
      </div>
      <div className="px-4">
        <div className="flex items-center bg-slate-900 h-12 mt-4 rounded-tr-md rounded-tl-md text-white font-lg">
          <div className="w-[100px] text-[18px] text-center font-bold border-r-2">
            S.No
          </div>
          <div className="w-full text-center text-[18px] font-bold border-r-2">
            Name
          </div>
          <div className="w-[220px] text-center text-[18px] font-bold">
            Certification
          </div>
        </div>
        {Events.map((Event, i) => {
          console.log(Event);
          return (
            <EventRow
              key={i}
              index={i + 1}
              name={Event.EventName}
              EventId={Event.EventId}
              certification={Event.Certification}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
