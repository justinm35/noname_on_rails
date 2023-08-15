import React, { useState, useContext, useEffect } from "react";
import Sidebar from "../Sidebar"
import { Outlet, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../App";
import axios from "axios";

export default () => {
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
	const navigate = useNavigate()
	useEffect(() => {
		if(currentUser){
			console.log(currentUser)
		}else{
			axios.get('api/v1/sessions/authenticate')
				.then((res)=>{
					setCurrentUser({ id: res.data.user?.id, email: res.data.user?.email})
				})
				.catch((err)=>{
					navigate('/signin')
					console.log(err)
				})
		}
	},[])
	return(
		<div className="w-full h-screen flex">
			<Sidebar />
			<div className="w-full h-full px-12 py-8">
				<Outlet />
			</div>
		</div>
	)
}
