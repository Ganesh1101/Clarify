import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/mainLayout"; // Import the Layout component
import Dashboard from "./pages/Dashboard";
import Releases from "./pages/Release";
import TestCases from "./pages/TestCases";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignInMobile from "./pages/SignInMobile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* SignIn route is independent and does NOT use Layout */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signInMobile" element={<SignInMobile/>} />
        {/* Wrap all other routes inside Layout */}
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
