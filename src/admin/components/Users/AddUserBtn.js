import React from "react";
import { createPopper } from "@popperjs/core";

const AddUserBtn = (props) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top",
    });
    setPopoverShow(true);
  };
  const closeTooltip = () => {
    setPopoverShow(false);
  };
  return (
    <div className="flex flex-wrap">
      <div className="w-full text-center">
        <button
          className={`${
            props.showForm ? "bg-red-500" : "bg-green-500"
          } w-12 right-4 absolute text-white rounded  shadow active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded-full hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
          type="button"
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
          ref={btnRef}
          onClick={
            props.showForm
              ? () => props.onClick(false)
              : () => props.onClick(true)
          }
        >
          {props.showForm ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </button>
        <div
          className={`
                ${popoverShow ? "" : "hidden "} ${
            props.showForm ? "bg-red-400" : "bg-green-400"
          } border-0 mr-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg`}
          ref={popoverRef}
        >
          <div>
            <div className=" text-white opacity-75 font-semibold p-3 mb-0   rounded-t-lg">
              {props.showForm ? "Fermer" : "Ajouter"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserBtn;
