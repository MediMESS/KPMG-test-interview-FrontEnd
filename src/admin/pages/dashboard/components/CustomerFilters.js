import React, { Component } from "react";
import { createPopper } from "@popperjs/core";
import AddSearchFilter from "./AddSearchFilter";
import Filters from "./Filters";

class CustomerFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownPopoverShow: false,
    };
    this.btnDropdownRef = React.createRef();
    this.popoverDropdownRef = React.createRef();
  }
  setDropdownPopoverShow = (value) => {
    this.setState({ dropdownPopoverShow: value });
  };
  // dropdown props
  openDropdownPopover = () => {
    createPopper(this.btnDropdownRef.current, this.popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    this.setDropdownPopoverShow(true);
  };

  closeDropdownPopover = () => {
    this.setDropdownPopoverShow(false);
  };

  render() {
    return (
      <>
        <button
          className="focus:outline-none focus:border-none text-gray-600 py-1 px-3"
          ref={this.btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            this.state.dropdownPopoverShow
              ? this.closeDropdownPopover()
              : this.openDropdownPopover();
          }}
        >
          <i className="fas fa-filter"></i>
        </button>
        <div
          ref={this.popoverDropdownRef}
          className={
            (this.state.dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50 overflow-auto float-left py-2 list-none text-left rounded shadow-lg w-1/3 md:w-1/2 sm:w-2/3 h-3/4"
          }
        >
          <button
            className="focus:outline-none block leading-snug font-normal absolute text-right text-gray-800 absolute top-2 bg-transparent right-4 rounded text-base items-center justify-center w-8 pl-3 py-3"
            onClick={this.closeDropdownPopover}
          >
            <i className="fas fa-times"></i>
          </button>
          <p
            className={
              "text-sm py-2 px-4 uppercase text-lg font-bold bg-gray-200 block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Filtrer
          </p>
          <AddSearchFilter headers={this.props.headers} />
          <Filters headers={this.props.headers} />
        </div>
      </>
    );
  }
}

export default CustomerFilters;
