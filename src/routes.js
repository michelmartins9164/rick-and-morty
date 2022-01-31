import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Person from "./pages/Person";


export default function RoutePages() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/person/:id" element={<Person/>}/>
            </Routes>
        </BrowserRouter>
    )
};