import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { simpleLogin, rememberMeLogin } from "../../redux/actions";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Password is required"),
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onConnection = (values) => {
    const { remember_me, ...user } = values;
    this.props.onSignIn({ remember_me, user, token: "token" });
  };
  render() {
    return (
      <div className="flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto text-blue-600 p-3 text-center items-center justify-center w-16 h-16 shadow-lg rounded-full bg-indigo-700">
              <i className="text-white fas fa-lock text-3xl"></i>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Connectez-vous à votre compte
            </h2>
          </div>
          <Formik
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
              this.onConnection(values);
            }}
            initialValues={{
              email: "",
              password: "",
              remember_me: false,
            }}
            validationSchema={LoginSchema}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="space-y-6 mt-4">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <Field
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm ${
                        touched.email && errors.email
                          ? "ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500 "
                          : "focus:ring-indigo-500 focus:border-indigo-500"
                      }`}
                      placeholder="Adresse Email"
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="text-red-500 mb-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                      ${
                        touched.password && errors.password
                          ? "ring-red-500 border-red-500 focus:ring-red-500 focus:border-red-500 "
                          : "focus:ring-indigo-500 focus:border-indigo-500"
                      }
                      `}
                      placeholder="Password"
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="text-red-500 mb-2"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="cursor-pointer flex items-center ">
                    <Field
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="cursor-pointer h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="cursor-pointer ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={this.onSubmit}
                    disabled={isSubmitting}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      {/*<!-- Heroicon name: solid/lock-closed -->*/}
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Se connecter
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (params) => {
      const { remember_me, ...userInfo } = params;
      if (remember_me) {
        dispatch(rememberMeLogin(userInfo));
      } else {
        dispatch(simpleLogin(userInfo));
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
