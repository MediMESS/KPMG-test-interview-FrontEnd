import React from "react";

const Produit = (props) => {
  return (
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-indigo-600 xl:inline">KPMG Data</span>
        <span className="block xl:inline">
          {" "}
          Vos données sont notre priorité!
        </span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <button
            onClick={() => props.setLoginTab()}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Se Connecter
          </button>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="https://home.kpmg/dz/fr/home.html"
            target="_blank"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Autres Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Produit;
