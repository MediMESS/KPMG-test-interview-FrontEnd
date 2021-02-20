import React, { Component } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "../Dropdowns/TableDropdown.js";
import CustomerItem from "./CustomerItem.js";

class CustomersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "light",
    };
  }

  render() {
    /* 
            $table->index('ticket_id',
            $table->foreign('ticket_id')->references('id')->on('tickets')->onDelete('cascade');
            'status')->default('invalide',
            // invalide, valide : It's related to when we add it to the ticket!
            'ticket_status')->default('invalide',
            $table->timestamps(); */

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
                  Card Tables
                </h3>
              </div>
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
