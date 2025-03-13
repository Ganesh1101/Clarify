import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/mainLayout"; // Import the Layout component
import Dashboard from "./pages/Dashboard";
import Releases from "./pages/Release";
import TestCases from "./pages/TestCases";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="releases" element={<Releases />} />
          <Route path="testcases" element={<TestCases />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
