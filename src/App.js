import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import DashboardContentContainer from "./components/DashboardContentContainer";

function App() {
  return (
    <div className="w-screen min-h-screen grid grid-cols-12 gap-0 bg-gray-200 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="auto h-full col-span-10">
        {/* Dashboard Header */}
        <DashboardHeader />
        {/* Dashboard Content */}
        <DashboardContentContainer />
      </div>
    </div>
  );
}

export default App;
