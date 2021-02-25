import React, { Component } from "react";
import CustomerFilters from "./CustomerFilters";
// components

import CustomerItem from "./CustomerItem.js";

class CustomersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "light",
    };
  }

  render() {
    const theaders = [
      "nom",
      "prenom",
      "fonction",
      "addresse",
      "ville",
      "pays",
      "code_postal",
      "telephone1",
      "telephone2",
      "email",
    ];
    return (
      <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (this.state.color === "light"
              ? "bg-white"
              : "bg-blue-900 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (this.state.color === "light"
                      ? "text-gray-800"
                      : "text-white")
                  }
                >
                  CLIENTS
                </h3>
              </div>
              <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                <div className="relative flex w-full flex-wrap items-stretch">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                </div>
              </form>
              <CustomerFilters headers={theaders} />
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  {theaders.map((header, i) => (
                    <th
                      key={i}
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                        (this.state.color === "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-blue-800 text-blue-300 border-blue-700")
                      }
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CustomerItem color="light" />
                <CustomerItem color="light" />
                <CustomerItem color="light" />
                <CustomerItem color="light" />
                <CustomerItem color="light" />
                <CustomerItem color="light" />
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
export default CustomersTable;
