import { useState } from "react";
import { useMutation } from "react-query";
import useAuth from "../../../setup/hooks/useAuth";
import axios from "../../../setup/api/axios";
import { async } from "regenerator-runtime";

export const useLogin = () => {
  // Global Auth Context
  const { setAuth } = useAuth();

  const apiCall = async (data) => {
    const response = await axios.post(
      "/auth/login",
      {
        nameOrmail: data.username,
        password: data.password,
        role:1,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response;
  };

  const [status, setStatus] = useState(0);
  const { mutate, isLoading } = useMutation(apiCall, {
    onSuccess: (response) => {
      console.log(response);
      const accessToken = response.data?.accessToken;
      const user = response.data?.username;
      const role=1;
      setAuth({ user,role,accessToken });
      setStatus(response.status);
      //Store details in localstorage
      localStorage.setItem("auth", JSON.stringify({ user,role, accessToken }));
    },
    onError: (err) => {
      if (!err?.response) {
        setStatus(500);
      } else setStatus(err.response.status);
    },
  });

  return [status, isLoading, (data) => mutate(data)];
};

export const GoogleAuth = async() => {
  const response = await axios.get("/auth/google");
  console.log(response);
  return response;
};
