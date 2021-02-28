import React from "react";
import TableDropdown from "../../../components/Dropdowns/TableDropdown";

const CustomerItem = (props) => {
  const headers = [
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
    <tr>
      <td
        className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-sm ${
          props.customer.id === "" ? "text-red-500" : "text-gray-900"
        }`}
      >
        {props.customer.id === "" ? "???" : props.customer.id}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-sm text-gray-900">
        <div className="flex">
          <img
            src={`./assets/img/${
              props.customer.image ? props.customer.image : `sketch.jpg`
            }`}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
          ></img>
        </div>
      </td>
      {headers.map((h, i) => (
        <td
          key={i}
          className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-sm ${
            props.customer[h] === "" ? "text-red-500" : "text-gray-900"
          }`}
        >
          {props.customer[h] === "" ? "???" : props.customer[h]}
        </td>
      ))}

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            props.customer.status === "validated"
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500"
          }`}
        >
          {props.customer.status === "validated" ? "Validé" : "Non-Validé"}
        </span>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-sm text-gray-900 text-right">
        <TableDropdown />
      </td>
    </tr>
  );
};

export default CustomerItem;
