import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import axios  from "../setup/api/axios";
import EventHeld from "./EventsHeld";

const Main = () => {
  const [Events, setEvents] = useState([
    {EventName:"Saket's Criccket",EventId:"123",Certification:"0"},
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/events");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setEvents(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  });
  return (
    <div className="pr-2 pl-2">
      <div className="flex text-5xl font-bold">
        <h1>Events</h1>
        <button className="ml-auto mr-4 w-20 h-11 bg-purple-gradient text-white rounded-md">
          <div className="flex justify-evenly text-lg font-bold items-center border-6">
            <FaPlus />
            Add
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
            <div className="w-[100px] text-[18px] text-center font-bold border-r-2">S.No</div>
            <div className="w-full text-center text-[18px] font-bold border-r-2">Name</div>
            <div className="w-[220px] text-center text-[18px] font-bold border-r-2">Certification</div>
        </div>
        {Events.map((Event,i)=>{
            return <EventHeld index={i+1} name={Event.EventName} EventId={Event.EventId} certification={Event.Certification}/>
        })}
      </div>
    </div>
  );
};

export default Main;
