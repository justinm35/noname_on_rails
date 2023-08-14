import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Public from "../components/public/Public";
import HomePage from "../components/public/homepage/HomePage";
import RegistrationPage from "../components/public/authentication/RegistrationPage";
import SignInPage from "../components/public/authentication/SignInPage";
import Resources from "../components/resources/Resources";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Public/>}>
        <Route index element={<HomePage />}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
      </Route>
			<Route path="/resources" element={<Resources/>}>

			</Route>
    </Routes>
  </Router>
);
