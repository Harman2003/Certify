import React, { useState } from "react";
import Signup from "./signup/signup";
import Login from "./sign-in/login";
import LoginOrg from "./OrgSignIn/login";
import SignupOrg from "./OrgSignUp/signup";

const Welcome = ({ current }) => {
  const [isLogin, setLogin] = useState(current.isLog);
  const [isOrg, setOrg] = useState(current.isOrg);
  return (
    <>
      {isOrg ? ( isLogin ? (
      <LoginOrg
        isLogin={isLogin}
        setLogin={setLogin}
        isOrg={isOrg}
        setOrg={setOrg}
      />
      ) : (
      <SignupOrg
        isLogin={isLogin}
        setLogin={setLogin}
        isOrg={isOrg}
        setOrg={setOrg}
      />
      )): (isLogin ? (
      <Login
        isLogin={isLogin}
        setLogin={setLogin}
        isOrg={isOrg}
        setOrg={setOrg}
      />
      ) : (
      <Signup
        isLogin={isLogin}
        setLogin={setLogin}
        isOrg={isOrg}
        setOrg={setOrg}
      />
      ))}
    </>
  );
};

export default Welcome;
