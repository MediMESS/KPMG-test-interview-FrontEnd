import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Toasteo from "toasteo";
import SelectDropdown from "../../../components/Dropdowns/SelectDropdown";

const SearchFilterSchema = Yup.object().shape({
  search_filter_name: Yup.string().required("Nom du filtre vide"),
  query_tag: Yup.string().required("Recherche vide"),
});

class AddSearchFilter extends Component {
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
        <button
          className={` text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 lg:w-1/2
          ${
            this.state.isShowAddTagForm
              ? "active:bg-red-600 bg-red-500"
              : "bg-blue-500 active:bg-blue-600"
          }`}
          type="button"
          onClick={this.toggleShowAddTagForm}
        >
          {this.state.isShowAddTagForm ? (
            <>Fermer</>
          ) : (
            <>
              <i className="fas fa-plus"> </i> Ajouter Filtre
            </>
          )}
        </button>

        {this.state.isShowAddTagForm && (
          <div className="mt-2 relative p-2 border-solid border-2 border-gray-200">
            <div className="w-full flex flex-col justify-center items-center">
              <Formik
                onSubmit={(values, actions) => {
                  actions.setSubmitting(false);
                  this.createSearchTag(values);
                }}
                initialValues={{
                  search_filter_name: "",
                  query_tag: "",
                }}
                validationSchema={SearchFilterSchema}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form className="w-2/3">
                    <div className="rounded-md -space-y-px">
                      <div>
                        <Field
                          id="search_filter_name"
                          name="search_filter_name"
                          type="text"
                          className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm ${
                            touched.search_filter_name &&
                            errors.search_filter_name
                              ? "ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500 "
                              : "focus:ring-indigo-500 focus:border-indigo-500"
                          }`}
                          placeholder="Nom du filtre"
                        />
                        <ErrorMessage
                          component="div"
                          name="search_filter_name"
                          className="text-left text-red-500 "
                        />
                      </div>
                    </div>
                    <SelectDropdown
                      selectClassName="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 text-left rounded-t-md focus:outline-none  focus:z-10 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500  my-4"
                      headers={this.props.headers}
                      header={this.state.header}
                      setHeader={this.setHeader}
                      toCapitalLetter={true}
                      icon={true}
                    />
                    <div className=" relative sm:w-full flex flex-wrap items-stretch mt-2">
                      <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <i className="fas fa-search"></i>
                      </span>
                      <Field
                        name="query_tag"
                        type="text"
                        placeholder="Rechercher du filtre ..."
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                      />
                      <ErrorMessage
                        component="div"
                        name="query_tag"
                        className="text-red-500"
                      />
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="mt-4 w-1/2">
                <button
                  className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AddSearchFilter;
