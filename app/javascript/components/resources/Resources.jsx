import React from "react";
import Sidebar from "../Sidebar"
import { Outlet } from "react-router-dom";

export default () => (
	<div className="w-full h-full">
		<Sidebar />
		<Outlet />
	</div>
)
