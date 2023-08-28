import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const [toggleWideSidebar, setToggleWideSidebar] = useState(true)

 return (
	<div className="absolute h-full">
	<div className={`relative flex flex-col items-center h-full text-gray-700 bg-gray-100 rounded transition-all ${toggleWideSidebar ? 'w-16' : 'w-48' }`}>
		<div className="w-10 h-10 bg-gray-100 absolute -right-10 top-2 rounded-r-md flex items-center justify-center">
			<button onClick={()=>setToggleWideSidebar(!toggleWideSidebar)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`transition ${toggleWideSidebar ? '-rotate-90' : 'rotate-90'}`}>
					<path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
					<path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/>
				</svg>
			</button>
		</div>
		<NavLink className="flex items-center w-full ml-2 px-3 mt-3">
			<svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
			</svg>
			<span className={`ml-2 text-sm font-bold transition-all ease-out delay-300 ${toggleWideSidebar && 'hidden'}`}>RailsSchedule</span>
			{/* <span className={`ml-2 text-sm font-bold transition-opacity duration-700 ease-in overflow-hidden ${toggleWideSidebar ? 'opacity-0 max-h-0 max-w-none hidden' : 'opacity-100 max-h-full'}`}>RailsSchedule</span> */}
		</NavLink>
		<div className="w-full px-2">
			<div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
				<NavLink to="/resources" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
					<span className={`ml-2 text-sm font-medium transition-all ${toggleWideSidebar && 'hidden'}`}>Dasboard</span>
				</NavLink>
				<NavLink to="chat" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
				<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg>
					<span className={`ml-2 text-sm font-medium transition-all ${toggleWideSidebar && 'hidden'}`}>Chat</span>
					<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
				</NavLink>
				{/* <NavLink className="flex items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<span className={`ml-2 text-sm font-medium transition-all ${toggleWideSidebar && 'hidden'}`}>Insights</span>
				</NavLink>
				<NavLink className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
					</svg>
					<span className={`ml-2 text-sm font-medium transition-all ${toggleWideSidebar && 'hidden'}`}>Docs</span>
				</NavLink> */}
			</div>
			<div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
				{/* <NavLink className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<span className={`ml-2 text-sm font-medium transition-all ${toggleWideSidebar && 'hidden'}`}>Products</span>
				</NavLink>
				<NavLink className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
					<svg className="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
					</svg>
					<span className={`ml-2 text-sm font-medium transition-all ${toggleWideSidebar && 'hidden'}`}>Settings</span>
				</NavLink>
				<NavLink className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg>
					<span className={`ml-2 text-sm font-medium transition-all ${toggleWideSidebar && 'hidden'}`}>Messages</span>
					<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
				</NavLink> */}
			</div>
		</div>
		<NavLink className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300">
			<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span className={`ml-2 text-sm font-medium transition-all ${toggleWideSidebar && 'hidden'}`}>Account</span>
		</NavLink>
	</div>
	</div>
 )
}

export default Sidebar;
