import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "../components/public/registration/RegistrationPage";
import HomePage from "../components/public/homepage/HomePage";
import Public from "../components/public/Public";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Public/>}>
        <Route index element={<HomePage />}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
      </Route>
    </Routes>
  </Router>
);
