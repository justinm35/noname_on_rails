import React from "react";
import Routes from "../routes";
import { createContext, useState } from "react";

export const CurrentUserContext = createContext(null)

export default App => {

    const [currentUser, setCurrentUser] = useState()

    return (
        <>
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}} > {/* Global user object */}
            {Routes}
        </CurrentUserContext.Provider>
        </>
    )
}
