import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../setup/hooks/useAuth";

const SideProfile = ({ list }) => {
  const { auth } = useAuth();
  return (
    <div className="flex flex-col top-0 bg-gray-50 border-r-[1px] md:w-[18%] sm:w-[70px] w-[55px] shadow-sm font-NunitoSans">
      {/* dark */}
      <div className="relative justify-end w-full md:h-1/2 h-24 bg-gray-900">
        <div className="md:flex hidden z-10 absolute flex-col -bottom-16 bg-white rounded-md shadow-lg w-5/6 h-64 pt-10 right-[50%] translate-x-1/2">
          <img
            className="min-w-[80px] w-20 h-20 rounded-full self-center p-1 border-2"
            src="/images/user.png"
            alt="user logo"
          />
          <div className="self-center text-xl font-bold text-gray-700 font-openSans">{auth.user}</div>
          <hr className="m-2" />

          <div className="self-center mt-3 border border-orange-500 rounded-md px-4 py-2 font-semibold font-sans">Logout</div>
        </div>
        {/* background effect */}
        <div className="md:visible hidden z-0 absolute -bottom-[48px] right-[48%] translate-x-1/2 bg-white rounded-md shadow-md w-5/6 h-64"></div>
      </div>

      {/* light */}
      <div className="self-center w-5/6 mt-10 md:mt-28 md:grid gap-2 grid-cols-2">
        {list.map((option, index) =>
          element(index, option.name, option.path, option.icon, option.on)
        )}
      </div>
    </div>
  );
};

function element(index, value, path, Icon, isSelect) {
  return (
    <Link
      key={index}
      to={path}
      className="relative group flex flex-col items-center justify-center h-[75px] py-2"
    >
      <Icon
        size={25}
        className="mb-2 text-gray-400 child group-hover:text-orange-700"
        style={{ color: isSelect && "rgb(194 65 12 / var(--tw-bg-opacity)" }}
      />

      <div className="hidden md:block">
        <div
          className="group-hover:text-orange-700 text-lg"
          style={{ color: isSelect && "rgb(194 65 12 / var(--tw-bg-opacity)" }}
        >
          {value}
        </div>
        <div
          className="bg-orange-700 max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px]"
          style={{ maxWidth: isSelect && "100%" }}
        ></div>
      </div>

      {/* hover-title */}
      <div className="hidden md:opacity-0 transition-opacity duration-300 group-hover:block absolute z-20 top-5 left-14 md:left-2 p-1 rounded-lg whitespace-nowrap bg-gray-700 text-white">
        <div className="relative z-20">{value}</div>
        <div className="absolute top-2 -left-1 z- bg-gray-700 h-4 w-4  skew-x-12 -rotate-[38deg] "></div>
      </div>
    </Link>
  );
}

export default SideProfile;

// transition-transform ease-in-out duration-500 hover:transform hover:origin-left hover:scale-x-[1.03] hover:text-orange-500 rounded-lg hover:shadow-md
