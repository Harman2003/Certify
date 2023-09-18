import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Events from "./Events";
import Certificate from "./Certificates";

const DashRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events">
          <Route index element={<Events/>} />
          <Route
            path=":id"
            element={
              <Certificate/>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default DashRoute;
