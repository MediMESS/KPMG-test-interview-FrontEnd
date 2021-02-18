import React, { useState } from "react";
import Toasteo from "toasteo";

const ModalMessage = (props) => {
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  const fermer = () => {
    props.fermer();
  };

  const copyCliboard = () => {
    if (window.Toasteo) window.Toasteo.close();
    const contentCopy = `Email: ${props.user.email}    Mot de passe: ${props.user.password}`;
    navigator.clipboard.writeText(contentCopy);
    window.Toasteo = new Toasteo({ duration: 1000 });
    window.Toasteo.success("Informations Copier dans Clipboard");
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">{props.title}</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="mb-4 mt-0 text-gray-600 text-lg leading-relaxed">
                Afin de transmettre au nouvel utilisateur, Veuillez copier les
                informations suivantes.
                <br></br>
                <small>
                  Vous pouvez le faire appuyant sur le bouton "COPIER
                  INFORMATION"
                </small>
              </p>

              <div className="mb-4 border border-solid border-4 border-gray-300 p-4">
                <ul>
                  <li>
                    <span className="text-gray-600">Email:</span>{" "}
                    {props.user.email}{" "}
                  </li>
                  <li>
                    <span className="text-gray-600">Mot de Passe:</span>{" "}
                    {props.user.password}{" "}
                  </li>
                </ul>
              </div>
              <p className="text-red-500">
                <span className="font-bold">Attention!</span> Si vous ne
                sauvegardez pas les informations, ils seront perdues à jamais.
              </p>

              {showConfirmation && (
                <p className="p-1 text-white bg-red-400 font-bold mt-1">
                  Vous confirmer avoir copier les informations, dans le cas
                  contraire vous êtes au courant qu'ils seront perdus.
                </p>
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              {showConfirmation ? (
                <button
                  className="bg-blue-500 text-white background-transparent font-bold roundd shadow uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => fermer()}
                >
                  Confirmer
                </button>
              ) : (
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowConfirmation(true)}
                >
                  Fermer
                </button>
              )}
              <button
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={copyCliboard}
              >
                Copier Information
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default ModalMessage;
