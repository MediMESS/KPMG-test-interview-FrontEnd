import React, { useState } from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const { pagination } = props;
  let pages = [];
  if (
    pagination.total_pages > 5 &&
    pagination.total_pages - pagination.current_page > 4
  ) {
    pages.push(pagination.current_page);
    pages.push(pagination.current_page + 1);
    pages.push(-1);
    pages.push(pagination.total_pages - 1);
    pages.push(pagination.total_pages);
  } else {
    let initI;
    if (pagination.total_pages < 5) {
      initI = 1;
    } else {
      initI = pagination.total_pages - 4;
    }
    for (let i = initI; i <= pagination.total_pages; i++) {
      pages.push(i);
    }
  }

  const changePageLimit = (e) => {
    props.setPaginationLimit(e.target.value);
  };
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="relative sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium font-bold">{pagination.from}</span> to{" "}
            <span className="font-medium font-bold">{pagination.to}</span> of{" "}
            <span className="font-medium font-bold">{pagination.total}</span>{" "}
            results
          </p>
        </div>

        {/*  Dropdown */}
        {props.setPaginationLimit && (
          <div className="no-focus-bor-out relative w-16 text-left">
            <select
              name=""
              id="limit_page"
              className="no-focus-bor-out inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              placeholder="options"
              onChange={changePageLimit}
            >
              <option
                style={{
                  display: "block",
                  padding: "1rem .5rem",
                  color: "rgba(55, 65, 81, .8)",
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                5
              </option>
              <option
                style={{
                  display: "block",
                  padding: "1rem .5rem",
                  color: "rgba(55, 65, 81, .8)",
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                10
              </option>
              <option
                style={{
                  display: "block",
                  padding: "1rem .5rem",
                  color: "rgba(55, 65, 81, .8)",
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                25
              </option>
            </select>
          </div>
        )}

        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              disabled={pagination.current_page === 1 ? true : false}
              className={`${
                pagination.current_page !== 1
                  ? "users_pages_actions"
                  : "users_pages_actions_not_allowed"
              }  focus:outline-none relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
              onClick={() =>
                props.loadCurrentPaginationUsers(pagination.current_page - 1)
              }
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {pages.map((p, i) => {
              if (p === -1) {
                return (
                  <span
                    key={i}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                  >
                    ...
                  </span>
                );
              } else {
                return (
                  <button
                    key={i}
                    className={`focus:outline-none relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 ${
                      p === pagination.current_page
                        ? "bg-blue-200"
                        : "users_page"
                    }`}
                    onClick={
                      pagination.current_page === p
                        ? () => {}
                        : () => {
                            props.loadCurrentPaginationUsers(p);
                          }
                    }
                  >
                    {p}
                  </button>
                );
              }
            })}

            <button
              disabled={
                pagination.current_page === pagination.total_pages
                  ? true
                  : false
              }
              className={`${
                pagination.current_page !== pagination.total_pages
                  ? "users_pages_actions cursor-pointer"
                  : "users_pages_actions_not_allowed"
              } focus:outline-none relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
              onClick={() =>
                props.loadCurrentPaginationUsers(pagination.current_page + 1)
              }
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
