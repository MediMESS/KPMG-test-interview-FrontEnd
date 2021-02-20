/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "../../components/Dropdowns/NotificationDropdown";
import UserDropdown from "../../components/Dropdowns/UserDropdown";
export default function Sidebar(props) {
  let docUrl = window.location.href.split("/");
  let initState =
    docUrl[docUrl.length - 1] === "" ? "dashboard" : docUrl[docUrl.length - 1];
  const [location, setLocation] = useState(initState);

  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const nav_links = [
    {
      name: "dashboard",
      link: "/",
      icon: "tv",
    },
    {
      name: "users",
      link: "/users",
      icon: "users",
    },
    {
      name: "settings",
      link: "/settings",
      icon: "tools",
    },
    {
      name: "tables",
      link: "/tables",
      icon: "table",
    },
    {
      name: "maps",
      link: "/maps",
      icon: "map-marked",
    },
  ];

  const static_links = [
    {
      name: "Front End",
      link: "https://github.com/MediMESS/KPMG-test-interview-FrontEnd",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Back End",
      link: "https://github.com/MediMESS/KPMG-test-interview-BackEnd",
      icon: "fas fa-project-diagram",
    },
    {
      name: "Tailwindcss",
      link: "https://tailwindcss.com",
      icon: "fab fa-css3-alt",
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: "fab fa-react",
    },
    {
      name: "Laravel",
      link: "https://laravel.com/",
      icon: "fab fa-laravel",
    },
    {
      name: "MySQL",
      link: "https://www.mysql.com/",
      icon: "fas fa-database",
    },
  ];
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-20 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <div className="flex items-center">
            <div
              className="cursor-pointer"
              onClick={() => setLocation("dashboard")}
            >
              <Link
                className="block md:hidden text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                Notus React
              </Link>
            </div>
            <div
              className={`hidden md:block cursor-pointer text-left text-blue-500  md:pb-2  mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0 `}
              onClick={() => props.minimize(false)}
            >
              <i className="fas fa-chevron-right fa-2x"></i>
            </div>
          </div>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div
                  className="w-6/12"
                  onClick={() => setLocation("dashboard")}
                >
                  <Link
                    className="block md:hidden text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {nav_links.map((link, i) => {
                return (
                  <li
                    key={i}
                    className="items-center"
                    onClick={() => setLocation(link.name)}
                  >
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location == link.name
                          ? "text-blue-500 hover:text-blue-600"
                          : "text-gray-800 hover:text-gray-600")
                      }
                      to={link.link}
                    >
                      <i
                        className={
                          `fas fa-${link.icon} mr-2 text-sm ` +
                          (location == link.name
                            ? "opacity-75"
                            : "text-gray-400")
                        }
                      ></i>{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              {static_links.map((static_link, i) => (
                <li key={i} className="inline-flex">
                  <a
                    href={static_link.link}
                    target="_blank"
                    className="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i
                      className={`${static_link.icon}  mr-2 text-gray-400 text-base`}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
