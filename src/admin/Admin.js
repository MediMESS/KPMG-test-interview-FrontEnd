import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "./components/Navbars/AdminNavbar.js";
import Sidebar from "./pages/sidebar/Sidebar";
import SidebarMinimized from "./pages/sidebar/SidebarMinimized";
import HeaderStats from "./components/Headers/HeaderStats";
import FooterAdmin from "./components/Footers/FooterAdmin";

// views

import Dashboard from "./pages/dashboard/Dashboard";
import Maps from "./pages/Maps";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Users from "./pages/Users";
// import "../assets/styles/tailwind.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimizeSidebar: false,
    };
  }

  setMinmizeSidebar = (value) => {
    this.setState({ minimizeSidebar: value });
  };
  render() {
    return (
      <div id="admin">
        {this.state.minimizeSidebar ? (
          <SidebarMinimized minimize={this.setMinmizeSidebar} />
        ) : (
          <Sidebar minimize={this.setMinmizeSidebar} />
        )}
        <div
          className={`relative ${
            this.state.minimizeSidebar ? "md:ml-20" : "md:ml-64"
          } bg-gray-200`}
        >
          <AdminNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/maps" exact component={Maps} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/tables" exact component={Tables} />
              <Route path="/users" exact component={Users} />
              <Redirect to="/" />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
