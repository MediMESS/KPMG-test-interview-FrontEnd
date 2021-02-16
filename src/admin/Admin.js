import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "./components/Navbars/AdminNavbar.js";
import Sidebar from "./pages/sidebar/Sidebar";
import HeaderStats from "./components/Headers/HeaderStats";
import FooterAdmin from "./components/Footers/FooterAdmin";

// views

import Dashboard from "./pages/Dashboard";
import Maps from "./pages/Maps";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";

export default function Admin() {
  return (
    <div>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}