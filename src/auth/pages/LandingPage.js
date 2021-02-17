import React, { Component } from "react";
import Produit from "./Produit";
import Login from "./Login";
import "tailwindcss/tailwind.css";
import "./LandingPage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_tab: 0,
      tabs: ["Produit", "Connection"],
      tabsImages: ["produit.jpeg", "compagnie.jpg"],
      isMenu: false,
    };
  }

  closeMenu = () => {
    this.setState({ isMenu: false });
  };
  openMenu = () => {
    this.setState({ isMenu: true });
  };

  setLoginTab = () => {
    this.setState({ current_tab: 1 });
  };

  render() {
    return (
      <div className="code relative h-screen bg-white overflow-hidden">
        <div className="h-screen max-w-7xl mx-auto">
          <div className="h-screen relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <button className="focus:border-none focus:outline-none border-indigo-100">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto bg-indigo-100 sm:h-10 hover:bg-indigo-300"
                        src="./logo.png"
                      />
                    </button>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        id="main-menu"
                        onClick={this.openMenu}
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open main menu</span>
                        {/*<!-- Heroicon name: outline/menu --> */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {this.state.tabs.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => this.setState({ current_tab: i })}
                      className={`${
                        this.state.current_tab === i
                          ? "focus:outline-none focus:border-none text-indigo-600 hover:text-indigo-500"
                          : "text-gray-500 hover:text-gray-900"
                      } font-medium `}
                    >
                      {this.state.tabs[i]}
                    </button>
                  ))}
                </div>
              </nav>
            </div>

            {/* //Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}

            {this.state.isMenu && (
              <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        src="./logo.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={this.closeMenu}
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close main menu</span>
                        {/*<!-- Heroicon name: outline/x -->*/}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="main-menu"
                  >
                    <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                      {this.state.tabs.map((t, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            this.setState({ current_tab: i });
                            this.closeMenu();
                          }}
                          className={`block w-full px-3 py-2 rounded-md text-base text-left font-medium cursor-pointer hover:bg-gray-100 focus:outline-none focus:border-none${
                            this.state.current_tab === i
                              ? " text-indigo-600 hover:text-indigo-500"
                              : "text-gray-700 hover:text-gray-900 "
                          } font-medium `}
                          role="menuitem"
                        >
                          {this.state.tabs[i]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-24 lg:mt-32 lg:px-8 xl:mt-28">
              {this.state.current_tab === 0 ? (
                <Produit {...this.props} setLoginTab={this.setLoginTab} />
              ) : (
                <Login {...this.props} />
              )}
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {this.state.current_tab === 0 ? (
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="./landing-page/produit.jpeg"
              alt=""
            />
          ) : (
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="./landing-page/compagnie.jpg"
              alt=""
            />
          )}
        </div>
      </div>
    );
  }
}

export default LandingPage;
