import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "../components/Footers/Pagination";
import TableUsers from "../components/Tables/UsersTable";
import AddUserBtn from "../components/Users/AddUserBtn";
import AddUser from "../components/Users/AddUser";
import usersServices from "../../services/user-services";
import Toasteo from "toasteo";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      createdUser: {},
      email_notif: false,
      pagination_limit: 5,
      pagination: {
        total_pages: 1,
        current_page: 1,
        from: 1,
        to: 5,
        total: 0,
      },
      users: [],
    };
  }

  setPaginationLimit = (limit) => {
    this.setState({ pagination_limit: limit });
    this.loadUsersPaginated(limit);
  };

  getPagination = async () => {};

  loadUsersPaginated = async (pagination_limit = undefined) => {
    if (window.Toasteo) window.Toasteo.close();
    window.Toasteo = new Toasteo();
    const data = await usersServices.getUsers({
      token: this.props.token,
      pagination_limit: pagination_limit
        ? pagination_limit
        : this.state.pagination_limit,
    });

    if (data.ok) {
      const { users_pagination } = data;
      this.setState((prevState) => ({
        ...prevState,
        users: users_pagination.data,
        pagination: {
          ...prevState.pagination,
          current_page: 1,
          total_pages: users_pagination.last_page,
          total: users_pagination.total,
          from: users_pagination.from,
          to: users_pagination.to,
        },
      }));
    } else {
      window.Toasteo.error(data.message);
    }
  };

  loadCurrentPaginationUsers = async (page) => {
    if (window.Toasteo) window.Toasteo.close();
    window.Toasteo = new Toasteo();
    const data = await usersServices.getUsersPagination({
      token: this.props.token,
      pagination_limit: this.state.pagination_limit,
      page,
    });
    if (data.ok) {
      const { users_pagination } = data;
      this.setState((prevState) => ({
        ...prevState,
        users: users_pagination.data,
        pagination: {
          ...prevState.pagination,
          current_page: users_pagination.current_page,
          total_pages: users_pagination.last_page,
          total: users_pagination.total,
          from: users_pagination.from,
          to: users_pagination.to,
        },
      }));
    } else {
      window.Toasteo.error(data.message);
    }
  };

  componentWillMount() {
    this.loadUsersPaginated();
  }

  setForm = (status) => {
    this.setState({ showForm: status });
  };

  render() {
    return (
      <div>
        <div className="flex flex-col relative mt-5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="z-10 h-8">
                {this.props.user.role === "admin" && (
                  <AddUserBtn
                    showForm={this.state.showForm}
                    onClick={this.setForm}
                  />
                )}
              </div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <TableUsers users={this.state.users} user={this.props.user} />
                <Pagination
                  pagination={this.state.pagination}
                  setPaginationLimit={this.setPaginationLimit}
                  loadCurrentPaginationUsers={this.loadCurrentPaginationUsers}
                />
              </div>
            </div>
          </div>
        </div>
        {this.props.user.role === "admin" && this.state.showForm && (
          <div className="mt-10">
            {" "}
            <h1 className="text-xl text-white font-bold text-center mb-5 bg-blue-400">
              Nouvel Utilisateur
            </h1>
            <AddUser
              closeForm={() => this.setForm(false)}
              loadUsersPaginated={this.loadUsersPaginated}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Users);
