import React, { useState, useRef } from "react";

const Input = ({ placeholder, State }) => {
  const { User, setUser, isEmpty } = State;
  const specialChars = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/;

  const [isError, setError] = useState(false);
  const inputRef = useRef(null);

  const setData = (e) => {
    const UserKey = getPlaceholderValue(placeholder);
    console.log(UserKey, "hey");
    User[UserKey] = e.target.value;
    console.log(User);
    setUser({ ...User });

    const value = e.target.value.trim();

    if (placeholder === "Organisation Name" && specialChars.test(value)) {
      setError(true);
    } else setError(false);
  };

  // class for text
  let styles =
    "w-full h-11 border-[1px] rounded-lg p-2 mb-2 hover:border-black text-lg";

  // class for dots (password)
  if (placeholder === "Password" || placeholder === "Confirm Password") {
    styles =
      "w-full h-11 border-[1px] rounded-lg p-2 mb-2 hover:border-black placeholder:text-[18px] text-[25px]";
  }

  return (
    <div>
      {/* <div>{placeholder}</div> */}
      <input
        ref={inputRef}
        type={type(placeholder)}
        placeholder={placeholder}
        value={User[placeholder]}
        onChange={setData}
        className={styles}
      />
      {isError && (
        <div className="text-xs text-red-600">{ErrorText(placeholder)}</div>
      )}
      {isEmpty && inputRef.current?.value === "" && (
        <div className="text-xs text-red-600">
          {placeholder} can not be Empty
        </div>
      )}
    </div>
  );

  function ErrorText(value) {
    if (value === "Organisation Name")
      return `${value} can only contain letters, numbers, underscores and periods `;
  }

  function type(placeholder) {
    if (placeholder === "Organisation Email") {
      return "email";
    } else if (
      placeholder === "Password" ||
      placeholder === "Confirm Password"
    ) {
      return "password";
    } else return "text";
  }

  function getPlaceholderValue(value) {
    let result;
    switch (value) {
      case "Organisation Name":
        result = "org_name";
        break;
      case "Organisation Email":
        result = "org_email";
        break;
      case "Organisation Id":
        result = "org_id";
        break;
      case "Password":
        result = "password";
        break;
      case "Confirm Password":
        result = "confirm_pass";
        break;
      default:
        result = "";
    }

    return result;
  }
};

export default Input;
