import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

export default () => (
  <div class="w-full h-full">
    <Navbar/>
    <Outlet/>
  </div>
);
