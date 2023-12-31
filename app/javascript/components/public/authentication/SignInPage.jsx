import React, { useState, useContext } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { CurrentUserContext } from "../../App";

const SignInPage = () => {
    const navigate = useNavigate();
    const [ signInFormData, setSignInFormData ] = useState({ email: '', password: '' })
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    const handleChange = (e) => {
        setSignInFormData({...signInFormData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //Rails embeds a CSRF token in the meta tags, we access that and send it in our request so rails
        //back end can confirm the legitimacy
        const token = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token
        axios.post('api/v1/sessions', {user: signInFormData})
            .then((res)=>{
                setCurrentUser(res.data.user)
                return navigate('/resources')
            })
            .catch((err)=> {toast.error('UH OH')})
    }
    return (
        <div className="absolute bottom-0 top-0 left-0 right-0 md:flex -z-10 font-opensans">
            <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#4E5B9E] to-purple-800 i justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
                    <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                    <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form onSubmit={(e)=>handleSubmit(e)} className="bg-white">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input name="email" onChange={handleChange} className="pl-2 outline-none border-none" type="text" placeholder="Email Address" />
                    </div>
                    <div name="password" className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input name="password" onChange={handleChange} className="pl-2 outline-none border-none" type="text" placeholder="Password" />
                    </div>
                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                    <Link to="/registration"><span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Already Have an Account?</span></Link>
                </form>
            </div>
        </div>
    )
}
export default SignInPage
