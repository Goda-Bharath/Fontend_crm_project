import React, { useState } from "react";
import { FaSearch, FaMobileAlt, FaEnvelope ,FaUser} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navabar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [Open, setopen] = useState(false);

  return (
    <div className="bg-white w-full">
      <nav className="sticky z-50 bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-cyan-400/50 shadow-lg w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="relative flex h-22 items-center justify-between">

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-cyan-300 hover:bg-cyan-700/30 hover:text-white"
              >
                {!mobileOpen ? "☰" : "×"}
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/">
                <div className="flex shrink-0 items-center mr-4 right-22">
                  <img
                    src="https://crm.skillcapital.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=1920&q=75"
                    alt="Reform"
                    className="h-15 w-80 cursor-pointer"
                  />
                </div>
              </Link>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-17">
                  <Link to="campaigns-data" className="block px-1 py-3 m-1 hover:border-b-4 hover:border-purple-500">Campaigns</Link>
                  <Link to="leads-data" className="block px-1 py-3 m-1 hover:border-b-4 hover:border-purple-500">Leads</Link>
                  <Link to="opportunities-data" className="block px-3 py-3 m-1 hover:border-b-4 hover:border-purple-500">Opportunities</Link>
                  <Link to="learners-data" className="block py-2 my-2 m-1 hover:border-b-4 hover:border-purple-500">Learners</Link>
                  <Link to="courses-data" className="block px-1 py-3 m-1 hover:border-b-4 hover:border-purple-500">Courses</Link>
                  <Link to="trainers-data" className="block px-3 py-3 m-1 hover:border-b-4 hover:border-purple-500">Trainers</Link>
                  <Link to="tasks-data" className="block my-1 py-3 m-1 hover:border-b-4 hover:border-purple-500">Tasks</Link>

                  <div className="flex items-center space-x-4 pl-10 ">
                    <Link to="search-bar">
                      <FaSearch className="text-black m-4 cursor-pointer text-[27px] " />
                    </Link>
                    <FaMobileAlt className="text-black cursor-pointer text-[27px] " />
                    <Link to="contact-page">
                      <FaEnvelope className="text-black mr-5 mx-4 cursor-pointer text-[27px] " />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* USER ICON BUTTON */}
            <button
              onClick={() => setopen(!Open)}
              className="rounded-full p-4 border cursor-pointer"
            >
               <FaUser className="text-black mr-1 cursor-pointer text-[25px] " />
            </button>
          </div>
        </div>

        {/* LOGIN POPUP */}
        {Open && (
          <div className="absolute top-24 right-80 w-150 h-70 bg-white text-black rounded-2xl shadow-2xl border z-50">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold"><span className="w-full hover:bg-blue-600 p-2 bg-blue-500 text-white py-2 cursor-pointer rounded">
          LOGIN</span> / <span className="w-full hover:bg-blue-600 p-2 bg-blue-500 text-white py-2 cursor-pointer rounded">
          SINUP</span></h3>
              <button onClick={() => setopen(false)} className="cursor-pointer">×</button>
            </div>

            <div className="p-4 space-y-4">
              <input
                type="text"
                placeholder="Mobile number or Email"
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded px-4 py-2"
              />
              <button className="w-full hover:bg-orange-600 bg-orange-500 text-white py-2 cursor-pointer rounded">
                Continue
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navabar;
 
