import React from "react";

// components

import CustomersTable from "./components/CustomersTable";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CustomersTable />
        </div>
      </div>
    </>
  );
}
