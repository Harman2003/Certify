import React, { useState } from "react";
import Input from "./inputbox";
import Button from "./Submit";
import Animation from "../animation";

const Signup = ({ isLogin, setLogin }) => {
  const [User, setUser] = useState({
    "Full Name": "",
    Username: "",
    "E-mail Address": "",
    Password: "",
    "Confirm Password": "",
  });
  const [isEmpty, setEmpty] = useState(false);

  return (
    <div className="h-full p-2 bg-gray-200 bg-welcome bg-no-repeat bg-cover">
      <div className="w-2/3 h-full flex bg-white items-center justify-evenly mx-auto rounded-lg">
        {/* signup */}
        <div className="w-96 rounded-md py-8 shadow-lg">
          <div className="mx-10 flex flex-col items-center">
            <div className="my-4 flex items-center">
              <div className="bg-logo bg-no-repeat bg-cover w-64 h-14 "></div>
              {/* <div className="text-5xl font-bold"></div> */}
            </div>

            <div className="w-full text-sm">
              <Input
                placeholder="Full Name"
                State={{ User, setUser, isEmpty }}
              />
              <Input
                placeholder="Username"
                State={{ User, setUser, isEmpty }}
              />
              <Input
                placeholder="E-mail Address"
                State={{ User, setUser, isEmpty }}
              />
              <Input
                placeholder="Password"
                State={{ User, setUser, isEmpty }}
              />
              <Input
                placeholder="Confirm Password"
                State={{ User, setUser, isEmpty }}
              />
              <Button States={{ User, setEmpty }} />
            </div>

            <div>
              Have an account?{" "}
              <span
                onClick={() => setLogin(!isLogin)}
                className="cursor-pointer text-blue-800"
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
        {/* lottie animate */}
        <Animation width={"650px"} height={"650px"} />
      </div>
    </div>
  );
};

export default Signup;
