import React, { useEffect, useState } from "react";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { showModal } from "../utils/modal";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const { user, logOut } = useUser();

  const navigate = useNavigate();

  const openNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <header className=" text-green-600  p-2 ">
      <div className=" max-w-[1040px] mx-auto flex justify-between items-center md:px-0 px-2">
        <div>
          <h1 className="text-lg font-bold">Life Cord</h1>
        </div>
        <div>
          <div className=" text-sm md:flex font-bold hidden">
            {user ? (
              <>
                <Link className="p-4" to="/dashboard">
                  Dashboard
                </Link>

                <button className="p-4 " onClick={logOut}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="p-4" to="/">
                  Home
                </Link>
                <Link className="p-4" to="/contact">
                  Contact
                </Link>
                <Link className="p-4" to="/about">
                  About
                </Link>
                <div className="hidden md:flex">
                  <button className="bg-green-600 font-bold text-white py-2 items-center px-4 rounded-md">
                    Donate now
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div onClick={openNav} className="md:hidden block">
        {navIsOpen ? (
          <button className="md:hidden absolute top-4 right-4">
            <BiMenuAltLeft className="text-2xl" />
          </button>
        ) : (
          <button className="md:hidden absolute top-4 right-4">
            <BiMenuAltRight className="text-2xl" />
          </button>
        )}

        {navIsOpen ? (
          <div className="md:hidden absolute top-10 right-0 bg-black h-58  text-white ">
            <div className="font-bold flex flex-col">
              <Link className="p-4" to="/">
                Home
              </Link>
              <Link className="p-4" to="/contact">
                Contact
              </Link>
              <Link className="p-4" to="/about">
                About
              </Link>
              <Link className="p-4" to="/">
                <button className="bg-green-600 font-bold text-white py-2 items-center px-4 rounded-md">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
