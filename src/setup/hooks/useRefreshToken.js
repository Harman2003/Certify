import axios from "../api/axios";
import useAuth from "./useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const useRefreshToken = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const refresh = async () => {
    try {
      const response = await axios.get("/auth/refresh", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      // console.log(response);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: response.data.username,
          accessToken: response.data.accessToken,
          role: response.data.role
        })
      );

      setAuth({
        user: response.data.username,
        accessToken: response.data.accessToken,
        role: response.data.role
      });

      return {
        username: response.data.username,
        newAccessToken: response.data.accessToken,
      };
    } catch (err) {
      navigate("/login", { state: { from: location } });
    }
  };
  return refresh;
};

export default useRefreshToken;
