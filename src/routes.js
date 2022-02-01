import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Home from "./pages/Home";
import Person from "./pages/Person";


export default function RoutePages() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/person/:id" element={<Person/>}/>
                <Route exact path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
};