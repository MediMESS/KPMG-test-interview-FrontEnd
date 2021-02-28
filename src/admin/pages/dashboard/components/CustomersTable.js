import React, { Component } from "react";
import { connect } from "react-redux";

import Pagination from "../../../components/Footers/Pagination";
import CustomerFilters from "./CustomerFilters";
import Toasteo from "toasteo";
import customerServices from "../../../../services/customer-services";
// components

import CustomerItem from "./CustomerItem.js";
import SelectDropdown from "../../../components/Dropdowns/SelectDropdown";

class CustomersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "light",
      pagination_limit: 25,
      pagination: {
        total_pages: 1,
        current_page: 1,
        from: 1,
        to: 25,
        total: 0,
      },
      customers: [],
    };
  }
  setPaginationLimit = (limit) => {
    this.setState({ pagination_limit: limit });
    this.loadCustomersPaginated(limit);
  };

  loadCustomersPaginated = async (pagination_limit = undefined) => {
    if (window.Toasteo) window.Toasteo.close();
    window.Toasteo = new Toasteo();
    const data = await customerServices.getCustomers({
      token: this.props.token,
      pagination_limit: pagination_limit
        ? pagination_limit
        : this.state.pagination_limit,
    });
    console.log(data);

    if (data.ok) {
      const { customers_pagination } = data;
      this.setState((prevState) => ({
        ...prevState,
        customers: customers_pagination.data,
        pagination: {
          ...prevState.pagination,
          current_page: 1,
          total_pages: customers_pagination.last_page,
          total: customers_pagination.total,
          from: customers_pagination.from,
          to: customers_pagination.to,
        },
      }));
    } else {
      window.Toasteo.error(data.message);
    }
  };

  loadCurrentPaginationCustomers = async (page) => {
    if (window.Toasteo) window.Toasteo.close();
    window.Toasteo = new Toasteo();
    const data = await customerServices.getCustomersPagination({
      token: this.props.token,
      pagination_limit: this.state.pagination_limit,
      page,
    });
    if (data.ok) {
      const { customers_pagination } = data;
      this.setState((prevState) => ({
        ...prevState,
        customers: customers_pagination.data,
        pagination: {
          ...prevState.pagination,
          current_page: customers_pagination.current_page,
          total_pages: customers_pagination.last_page,
          total: customers_pagination.total,
          from: customers_pagination.from,
          to: customers_pagination.to,
        },
      }));
    } else {
      window.Toasteo.error(data.message);
    }
  };

  componentWillMount() {
    this.loadCustomersPaginated();
  }

  setForm = (status) => {
    this.setState({ showForm: status });
  };

  render() {
    const theaders = [
      "id",
      "avatar",
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
      "status",
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
              <div className="relative flex justify-between align-center  w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (this.state.color === "light"
                      ? "text-gray-800"
                      : "text-white")
                  }
                >
                  CLIENTS
                </h3>

                <SelectDropdown
                  selectClassName={
                    "appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-left rounded-t-md focus:outline-none focus:z-10 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 justify-self-center"
                  }
                  headers={[25, 50, 100]}
                  header={this.state.pagination_limit}
                  icon={true}
                  setHeader={this.setPaginationLimit}
                />
              </div>
              <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                <div className="relative flex w-full flex-wrap items-stretch">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                </div>
              </div>
              <CustomerFilters headers={theaders} />
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
                {this.state.customers &&
                  this.state.customers.map((c, i) => (
                    <CustomerItem color="light" customer={c} key={i} />
                  ))}
              </tbody>
            </table>
            <Pagination
              pagination={this.state.pagination}
              loadCurrentPaginationUsers={this.loadCurrentPaginationCustomers}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(CustomersTable);
