import React from "react";
import { toCapitalLetter } from "../../../services/util";

const ItemUser = (props) => {
  const { user } = props;
  //   console.log(new Intl.DateTimeFormat("en-US").format(user.created_at));

  return (
    <tr className="hover:bg-blue-100">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={`${
                props.profile_pic
                  ? props.profile_pic
                  : `https://source.unsplash.com/random/${
                      500 + props.index
                    }x500`
              }`}
              alt={`pic_user${props.index}`}
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {toCapitalLetter(user.nom)} {toCapitalLetter(user.prenom)}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {user.fonction
            ? props.fonction
            : `${toCapitalLetter(user.nom)}, ipsum ${toCapitalLetter(
                user.role
              )}.`}
        </div>
        <div className="text-sm text-gray-500">
          {user.fonction
            ? props.fonction
            : `${toCapitalLetter(user.prenom)}${user.role}`}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-600">
          {new Date(user.created_at).toLocaleDateString()}
        </div>
      </td>
      <td
        className={`px-6 py-4 whitespace-nowrap text-sm  ${
          user.role === "admin" ? "text-blue-500" : "text-orange-500"
        } `}
      >
        {toCapitalLetter(user.role)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            user.status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {toCapitalLetter(user.status)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default ItemUser;
