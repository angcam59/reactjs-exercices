import React from "react";
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} /> 
                    <Route path="/contact" exact element={<Contact />} /> 
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default App;