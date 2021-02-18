import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import Toasteo from "toasteo";
import usersServices from "./../../../services/users-services";
import ModalMessage from "../../components/Modals/ModalMessage";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Format addresse email invalide")
    .required("Email est vide"),
  prenom: Yup.string()
    .required("Prenom est vide")
    .min(3, "Prenom doit être au moins 3 caractères"),
  nom: Yup.string()
    .required("Nom est vide")
    .min(3, "Prenom doit être au moins 3 caractères"),
});

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      openModal: false,
    };
  }

  openModal = (user) => {
    this.setState({ openModal: true, user });
  };

  closeModal = () => {
    this.props.closeForm();
    this.setState({ openModal: false });
    this.props.loadUsers();
  };

  confirmer = () => {};

  onSubmit = (values) => {
    window.Toasteo = new Toasteo();
    window.Toasteo.info("Ajout en cours ...");
    values.token = this.props.token;
    console.log(values);
    usersServices
      .addUser(values)
      .then((data) => {
        window.Toasteo.close();
        console.log(data);
        if (data.error) {
          window.Toasteo.duration = 1000;
          window.Toasteo.error(data.message);
        } else {
          window.Toasteo.success("Nouvel Utilisateur ajouté");
          if (!values.notif_email) {
            this.openModal(data.user);
          } else {
            this.props.closeForm();
          }
        }
      })
      .catch((e) => {
        window.Toasteo.error(
          "Erreur connection, Veuillez réessayer ultérieurement"
        );
      });
  };

  render() {
    return (
      <>
        {this.state.openModal && (
          <ModalMessage
            fermer={this.closeModal}
            user={this.state.user}
            title="Informations Utilisateur"
          />
        )}
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Information Compte
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Veuillez remplir toutes les informations, et indiquez comment
                  notifier le nouvel utilisateur
                </p>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-2">
              <Formik
                onSubmit={(values, actions) => {
                  actions.setSubmitting(false);
                  this.onSubmit(values);
                }}
                initialValues={{
                  prenom: "",
                  nom: "",
                  email: "",
                  status: "active",
                  role: "user",
                }}
                validationSchema={LoginSchema}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="prenom"
                              className="block  font-medium text-gray-700"
                            >
                              Prénom
                            </label>
                            <div className="relative flex w-full flex-wrap items-stretch">
                              <Field
                                type="text"
                                placeholder="Entrez le prénom"
                                name="prenom"
                                className={`px-3 py-3 placeholder-gray-400 border-gray-300 text-gray-700 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pr-10 border ${
                                  touched.prenom && errors.prenom
                                    ? "invalid-input"
                                    : "border-gray-800"
                                }
                                  `}
                              />
                              <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                <i className="fas fa-user"></i>
                              </span>
                            </div>
                            <ErrorMessage
                              component="div"
                              name="prenom"
                              className="text-red-500"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="nom"
                              className="block  font-medium text-gray-700"
                            >
                              Nom
                            </label>
                            <div className="relative flex w-full flex-wrap items-stretch">
                              <Field
                                type="text"
                                placeholder="Entrez le nom"
                                name="nom"
                                className={`px-3 py-3 placeholder-gray-400 border-gray-300 text-gray-700 relative bg-white bg-white rounded text-sm border ${
                                  touched.nom && errors.nom
                                    ? "invalid-input"
                                    : "border-gray-800"
                                }
                                  outline-none focus:outline-none focus:shadow-outline w-full pr-10`}
                              />
                              <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                <i className="fas fa-user"></i>
                              </span>
                            </div>
                            <ErrorMessage
                              component="div"
                              name="nom"
                              className="text-red-500"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="email"
                              className="block  font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <div className="relative flex w-full flex-wrap items-stretch">
                              <Field
                                type="text"
                                placeholder="Entrez l'adresse email"
                                name="email"
                                className={`px-3 py-3 placeholder-gray-400 border-gray-300 text-gray-700 relative bg-white bg-white rounded text-sm border ${
                                  touched.email && errors.email
                                    ? "invalid-input"
                                    : "border-gray-800"
                                }
                                  outline-none focus:outline-none focus:shadow-outline w-full pr-10`}
                              />
                              <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                <i className="fas fa-box"></i>
                              </span>
                            </div>
                            <ErrorMessage
                              component="div"
                              name="email"
                              className="text-red-500"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-2">
                            <label
                              htmlFor="status"
                              className="block font-medium text-gray-700"
                            >
                              Status
                            </label>
                            <Field
                              id="status"
                              as="select"
                              name="status"
                              autoComplete="status"
                              className={`cursor-pointer px-3 py-3 placeholder-gray-400 border-gray-300 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-800
                                outline-none focus:outline-none focus:shadow-outline w-full pr-10`}
                            >
                              <option>Active</option>
                              <option>Bloque</option>
                            </Field>
                          </div>

                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="role"
                              className="block font-medium text-gray-700"
                            >
                              Role
                            </label>
                            <Field
                              id="role"
                              as="select"
                              name="role"
                              autoComplete="role"
                              className={`cursor-pointer px-3 py-3 placeholder-gray-400 border-gray-300 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-800
                                outline-none focus:outline-none focus:shadow-outline w-full pr-10`}
                            >
                              <option>User</option>
                              <option>Admin</option>
                            </Field>
                          </div>
                        </div>

                        <div className="mt-5 flex items-start">
                          <div className="flex items-center h-5 border-transparent outline-none border-none">
                            <Field
                              id="notif_email"
                              name="notif_email"
                              type="checkbox"
                              className="h-4 w-4  rounded border-gray-400 focus:border-blue-500 text-blue-500 outline-none"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="notif_email"
                              className="font-medium text-gray-700"
                            >
                              Envoyer Email
                            </label>
                            <p className="text-gray-500">
                              Informer le nouvel utilisateur par email de ses
                              identifiants.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                          Ajouter
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
