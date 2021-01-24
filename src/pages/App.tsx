import React from "react";
//Pages
import Home from "./Home";
//Context
import {DataContext} from "../context/DataContext";

const App = () => {
    const url: string = 'http://localhost:8080/'
    return (
        <DataContext.Provider value={{url}}>
            <Home/>
        </DataContext.Provider>
    )
}

export default App;
