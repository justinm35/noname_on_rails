import React from "react";
import Routes from "../routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default props => (
    <>
    <ToastContainer/>
    {Routes}
    </>
);
