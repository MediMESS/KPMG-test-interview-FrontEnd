import React from "react";
import { connect } from "react-redux";
import { createPopper } from "@popperjs/core";
import accountService from "../../../services/account-services";
import { actionLogout } from "../../../redux/actions";
import Toasteo from "toasteo";

const UserDropdown = (props) => {
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

  const logout = () => {
    if (window.Toasteo) window.Toasteo.close();
    window.Toasteo = new Toasteo();
    window.Toasteo.info("Deconnection en cours...");
    accountService.logoutUser(props.token).then((data) => {
      console.log(data);
      window.Toasteo.close();
      if (data.ok) {
        window.Toasteo.success(data.message);
        props.logout();
      } else {
        window.Toasteo.error("Erreur, Veuillez réessayer ultérieurement");
      }
    });
  };
  return (
    <>
      <a
        className="text-gray-600 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="./assets/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="h-0 my-2 border border-solid border-gray-200" />
        <button
          className="w-full text-blue-500 bg-transparent text-left whitespace-nowrap text-sm px-4 font-bold py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={logout}
        >
          <i className="fas fa-sign-out-alt"></i> Deconnection
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(actionLogout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
