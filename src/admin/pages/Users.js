import React, { Component } from "react";

import Pagination from "../components/Footers/Pagination";
import TableUsers from "../components/Tables/TableUsers";
import AddUserBtn from "../components/Users/AddUserBtn";
import AddUser from "../components/Users/AddUser";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  setForm = () => {
    this.setState({ showForm: true });
  };
  render() {
    return (
      <div>
        <div className="flex flex-col relative mt-5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="z-10 h-8">
                <AddUserBtn onClick={this.setForm} />
              </div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <TableUsers />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
        {this.state.showForm && (
          <div className="mt-10">
            {" "}
            <h1 className="text-xl text-white font-bold text-center mb-5 bg-blue-400">
              Nouvel Utilisateur
            </h1>
            <AddUser />
          </div>
        )}
      </div>
    );
  }
}

export default Users;
