import React, { useState } from "react";
import { FaSearch, FaMobileAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { GiMeat } from "react-icons/gi";
import { Link } from "react-router-dom";


function Navabar() {

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="bg-white w-full">
            <nav className="sticky z-50 bg-white to-cyan-700/80 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-cyan-400/40 shadow-lg w-320">
                <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
                    <div className="relative flex h-22 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button
                                type="button"
                                aria-controls="mobile-menu"
                                aria-expanded={mobileOpen}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-cyan-300 hover:bg-cyan-700/30 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 "
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only border px-4 py-2 rounded-md text-red-400 ">Open main menu</span>
                                {!mobileOpen ? (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="h-6 w-6">
                                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="h-6 w-6">
                                        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <Link to="/">
                                <div className="flex shrink-0 items-center mr-4 right-22">
                                    <img
                                        src="https://crm.skillcapital.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=1920&q=75&dpl=dpl_B8Cpdyu5N5Z5hCYoRigMs54iCoW1"
                                        alt="Reform"
                                        className="h-15 w-80 cursor-pointer"
                                    />
                                </div>
                            </Link>

                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-17">
                                    <Link to="campaigns-data" className="block rounded-md px-1 py-3 m-1"><span className="text-black hover:border-b-4 hover:border-purple-600 pl-2"  >Campaigns</span></Link>
                                    <Link to="leads-data" className="block rounded-md px-1 py-3 m-1"><span className="text-black hover:border-b-4 hover:border-purple-600 pl-2">Leads</span></Link>
                                    <Link to="opportunities-data" className="block rounded-md px-3  py-3 m-1 "><span className="text-black hover:border-b-4 hover:border-purple-600 pl-2">Opportunities</span></Link>
                                    <Link to="learners-data" className="block rounded-md  py-2  my-2 m-1 "><span className="text-black hover:border-b-4 hover:border-purple-600 pl-2" >Learners</span></Link>
                                    <Link to="courses-data" className="block rounded-md px-1 py-3 m-1"><span className="text-black hover:border-b-4 hover:border-purple-600 pl-2 ">Courses</span></Link>
                                    <Link to="trainers-data" className="block rounded-md px-3 py-3 m-1 "><span className="text-black hover:border-b-4 hover:border-purple-600 pl-2" >Trainers</span></Link>
                                    <Link to="tasks-data" className="block rounded-md my-1 py-3 m-1"><span className="text-black hover:border-b-4 hover:border-purple-600 pl-2" id="u">Tasks</span></Link>
                                      <div className="flex items-center space-x-4">
                                        <Link to="search-bar">
                                            <FaSearch className="text-black m-4 cursor-pointer text-[27px]" />
                                        </Link>
                                        <FaMobileAlt className="text-black  cursor-pointer text-[27px] " />
                                        <FaEnvelope className="text-black mr-5 cursor-pointer text-[27px]" />
                                        <FaWhatsapp className="text-black mr-4 cursor-pointer text-[27px]" />
                                    </div>
                                </div>
                                

                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <button type="button" className="relative rounded-full p-1 text-black text-[57px] px-2 ">
                                <span className="absolute -inset-2.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="h-8 w-6">
                                    <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <div className="relative ml-3">
                                <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only ">Open user menu</span>
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-8 w-8 rounded-full bg-cyan-800 outline outline-1 outline-cyan-400/40" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden bg-white shadow-md" id="mobile-menu">
                    <div className="space-y-1 px-4 pt-2 pb-3">
                        <Link to="Campaings-data" className="block py-2 hover:bg-gray-100">Campaigns</Link>
                        <Link to="leads-data" className="block py-2 hover:bg-gray-100">Leads</Link>
                        <Link to="opportunities-data" className="block py-2 hover:bg-gray-100">Opportunities</Link>
                        <Link to="learners-data" className="block py-2 hover:bg-gray-100">Learners</Link>
                        <Link to="courses-data" className="block py-2 hover:bg-gray-100">Courses</Link>
                        <Link to="trainers-data" className="block py-2 hover:bg-gray-100">Trainers</Link>
                        <Link to="tasks-data" className="block py-2 hover:bg-gray-100">Tasks</Link>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navabar;