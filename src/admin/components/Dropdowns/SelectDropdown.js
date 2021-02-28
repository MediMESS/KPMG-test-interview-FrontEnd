import React from "react";
import { createPopper } from "@popperjs/core";
import { toCapitalLetter } from "../../../services/util";

const SelectDropdown = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div className="relative">
      <button
        className={`
          ${props.selectClassName} justify-between flex items-center`}
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {props.toCapitalLetter ? toCapitalLetter(props.header) : props.header}
        {props.icon && <i className="fas fa-arrow-down text-gray-500"></i>}
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base w-full z-50 py-2 list-none text-left rounded shadow-lg"
        }
      >
        {props.headers.map((h, i) => (
          <p
            key={i}
            className={
              "cursor-pointer hover:bg-gray-200 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap text-gray-800"
            }
            onClick={() => {
              closeDropdownPopover();
              props.setHeader(h);
            }}
          >
            {props.toCapitalLetter ? toCapitalLetter(h) : h}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SelectDropdown;
