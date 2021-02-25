import React from "react";
import TableDropdown from "../../../components/Dropdowns/TableDropdown";

const CustomerItem = (props) => {
  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
        <img
          src="./assets/img/bootstrap.jpg"
          className="h-12 w-12 bg-white rounded-full border"
          alt="..."
        ></img>{" "}
        <span
          className={
            "ml-3 font-bold " +
            +(props.color === "light" ? "text-gray-700" : "text-white")
          }
        >
          Argon Design System
        </span>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        $2,500 USD
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        <i className="fas fa-circle text-orange-500 mr-2"></i> pending
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        <div className="flex">
          <img
            src="./assets/img/team-1-800x800.jpg"
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
          ></img>
          <img
            src="./assets/img/team-2-800x800.jpg"
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
          ></img>
          <img
            src="./assets/img/team-3-800x800.jpg"
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
          ></img>
          <img
            src="./assets/img/team-4-470x470.png"
            alt="..."
            className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
          ></img>
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        <div className="flex items-center">
          <span className="mr-2">60%</span>
          <div className="relative w-full">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
              <div
                style={{ width: "60%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
              ></div>
            </div>
          </div>
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
        <TableDropdown />
      </td>
    </tr>
  );
};

export default CustomerItem;
