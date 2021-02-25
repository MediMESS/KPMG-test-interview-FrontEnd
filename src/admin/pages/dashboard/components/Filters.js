import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Toasteo from "toasteo";
import SelectDropdown from "../../../components/Dropdowns/SelectDropdown";
import { toCapitalLetter } from "../../../../services/util";

const SearchFilterSchema = Yup.object().shape({
  search_filter_name: Yup.string().required("Nom du filtre vide"),
  query_tag: Yup.string().required("Recherche vide"),
});

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAddTagForm: true,
      header: props.headers ? props.headers[0] : "",
    };
  }

  setHeader = (value) => {
    this.setState({ header: value });
  };

  setShowAddTagForm = (value) => {
    this.setState({ isShowAddTagForm: value });
  };

  toggleShowAddTagForm = () => {
    this.setState((prevState) => ({
      isShowAddTagForm: !prevState.isShowAddTagForm,
    }));
  };

  createSearchTag = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className="add-search p-3 text-center ">
        {this.props.headers.map((h, i) => (
          <div
            key={i}
            href="#pablo"
            className={
              "text-sm py-2 mt-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 shadow text-left"
            }
            onClick={(e) => e.preventDefault()}
          >
            <h2>{toCapitalLetter(h)}</h2>
            <div className="overflow-auto">
              <i className="fas fa-tag"></i>{" "}
              <button
                className="bg-gray-300 text-gray-600 active:bg-green-300 hover:bg-green-300 text-xs font-semibold inline-block py-1 px-2 rounded hover:shadow-lg uppercase ml-1 mr-1 outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
              >
                <i className="fas fa-times-circle text-red-500"></i>{" "}
                <span>Vide</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Filters;
