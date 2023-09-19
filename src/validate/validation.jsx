import React from "react";
import { useState } from "react";
import axios from "../setup/api/axios";
import { setDate } from "date-fns";
import animateData from "../assets/animationData.json";
import Lottie from "lottie-react";
const Validation = () => {
    const [id, setId] = useState();
    const [data, setData] = useState({
        username: "",
        eventName: "",
        orgName: "",
        orgId: "",
        expiration: 0
    });
    const [loading, setLoading] = useState(false);

    return (
      <div className="w-full h-full font-openSans">
        <div className="bg-white/50 shadow-xl w-full h-16 flex items-center justify-end px-6">
          <div className="mx-6">Home</div>
          <div className="mx-6">About Us</div>
          <div className="mx-6">Team</div>
          <div className="mx-6">Contact Us</div>
          <div className="mx-6">HelpDesk</div>
        </div>
        <div className="flex h-[calc(100%-64px)] w-full">
          <div className="h-full w-1/2">
            <Lottie
              animationData={animateData}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="h-full w-1/2 p-6 flex flex-col items-center">
            <div className="text-3xl">Enter Certificate Details</div>

            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.value)}
              className="border-[1px] rounded-lg w-64 h-12 px-3 text-2xl my-4"
            />
            <button onClick={handleVerify} className="bg-yellow-400 px-4 py-2 rounded-2xl m-4">Verify</button>
            
          </div>
        </div>
      </div>
    );

    async function handleVerify() {
       
            //   setLoading(true);
            //     const response = await axios.post("/validate-certificate", {id:id});
            //     console.log(response);
            //   const jsonData = await response.json();
            //   setData(jsonData);
            // } catch (error) {
            //   console.error("Error fetching data:", error);
            // } finally {
            //   setLoading(false); 
            // }
            setData({ username: "Saket", eventName: "SpellBee Competition", orgName: "CBSE", orgId: 121, expiration: 1179840000 });
};
}

export default Validation;
