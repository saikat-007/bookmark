import React, { useState } from "react";
import bookmarklogo from "../images/logo-bookmark.svg";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="">
      <nav className="">
        <div
          className={`${
            open ? "bg-teal-500 text-white" : "bg-white text-black"
          } w-full flex justify-between items-center`}
        >
          <div className="p-10 lg:ml-12">
            <img src={bookmarklogo} alt="" className="w-52 md:w-56 lg:w-64" />
          </div>
          <div>
            <button
              className="cursor-pointer lg:hidden text-4xl font-bold mt-2 p-10"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
            </button>
          </div>

          <div
            className={`bg-teal-500 absolute w-full flex flex-col top-32 z-50 text-xl mx-auto py-10 h-full ${
              open ? "visible" : "hidden"
            } lg:flex lg:flex-row lg:static lg:bg-white lg:shadow-none lg:justify-end lg:py-2 lg:text-lg lg:w-full`}
          >
            <div className="border-t-[1px] border-white p-6 text-center mx-10  lg:mx-1 text-white lg:text-black lg:border-none ">
              <a href="" className="lg:hover:text-red-500">
                PRICING
              </a>
            </div>
            <div className="border-t-[1px] border-white p-6 text-center mx-10 lg:mx-1 text-white lg:text-black lg:border-none">
              <a href="" className="lg:hover:text-red-500">
                FEATURES
              </a>
            </div>
            <div className="border-t-[1px] border-white p-6 text-center mx-10 lg:mx-1 text-white lg:text-black lg:border-none">
              <a href="" className="lg:hover:text-red-500">
                CONTACT
              </a>
            </div>
            <div className="border-t-[1px] border-white p-6 text-center mx-10 lg:mx-1 lg:mr-24 text-white lg:text-black lg:border-none">
              <a href="" className="">
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
