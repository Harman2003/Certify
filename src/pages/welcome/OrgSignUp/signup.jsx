import React, { useState } from "react";
import Input from "./inputbox";
import Button from "./Submit";
import Animation from "../animation";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuth } from "../sign-in/loginApi";
import ConnectWallet from "./ConnectWallet";
// import { connectContract } from "../../../utils/connectContract";
import { useAccount } from "wagmi";

const SignupOrg = ({ isLogin, setLogin, isOrg, setOrg }) => {
  const { address } = useAccount();
  const [User, setUser] = useState({
    org_name: "",
    org_email: "",
    org_id: "",
    password: "",
    confirm_pass: "",
    address: address,
  });

  const [isEmpty, setEmpty] = useState(false);

  return (
    <div className="h-full p-2 bg-gray-200 bg-welcome bg-no-repeat bg-cover">
      <div className="w-2/3 h-full flex bg-white items-center justify-evenly mx-auto rounded-lg">
        {/* signup */}
        <div className="w-96 rounded-md py-8 shadow-lg">
          <div className="mx-10 flex flex-col items-center">
            <div className="w-full text-sm">
              <Input
                placeholder="Organisation Name"
                State={{ User, setUser, isEmpty }}
              />
              <Input
                placeholder="Organisation Email"
                State={{ User, setUser, isEmpty }}
              />
              <Input
                placeholder="Organisation Id"
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

              <ConnectWallet />

              <Button States={{ User, setEmpty }} />
            </div>
            <div className="flex flex-col justify-evenly w-full h-[70%] text-sm mt-4">
              <button
                onClick={GoogleAuth}
                className="w-full h-11 bg-white-gradient text-black rounded-md"
              >
                <div className="flex justify-evenly text-lg items-center">
                  <span>Continue with google</span>
                  <FcGoogle />
                </div>
              </button>
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
            <div className="mt-4">
              Are You User?{" "}
              <span
                onClick={() => setOrg(!isOrg)}
                className="cursor-pointer text-blue-800"
              >
                Click here
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

export default SignupOrg;
