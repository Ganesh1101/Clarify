import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layouts/mainLayout"; // Import the Layout component
import Dashboard from "./pages/Dashboard";
import Releases from "./pages/Release";
import TestCases from "./pages/TestCases";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";

import SignInMobile from "./pages/SignInMobile";
import OTPForm from "./components/otpContainer";
import Verification from "./pages/Verification";
import ResetPasswordVerification from "./pages/ResetPasswordVerification";

import SuccessForm from "./components/successForm";
import Success from "./pages/Success ";

import ForgotPassword from "./pages/ForgotPassword";
import SetPassword from "./pages/SetPassword";
import Expenses from "./pages/Expenses";
import AddExpense from "./pages/AddExpense";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* SignIn route is independent and does NOT use Layout */}
        <Route path="/" element={<Navigate to="/signIn" replace />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signInMobile" element={<SignInMobile/>} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/forgot-password/verification" element={<ResetPasswordVerification />} />
        <Route path="/success" element={<Success />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/setPassword" element={<SetPassword/>} />
        {/* Wrap all other routes inside Layout */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="releases" element={<Releases />} />
          <Route path="testcases" element={<TestCases />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add-expense" element={<AddExpense />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
