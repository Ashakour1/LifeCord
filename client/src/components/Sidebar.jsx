import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

import { FaSignOutAlt } from "react-icons/fa";
const Sidebar = () => {
  const { logOut } = useUser();

  return (
    <div className="bg-gray-500 w-64 p-6 border-r  fixed h-full top-[55px]">
      <h2 className="text-2xl font-bold text-white mb-6">
      </h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className=" text-white hover:text-gray-900"
              href="#"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/donar-list"
              className="text-white hover:text-gray-900 "
              href="#"
            >
              Donations
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="bg-blue-500 text-white mt-80 flex items-center py-3 px-10 font-semibold rounded ml-5"
        onClick={logOut}
      >
        <FaSignOutAlt />
        <span className="pl-2"> Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
