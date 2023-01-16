import React from "react";
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ImportScript from "react-import-script";
import Clips from "./pages/Clips";
import Boutique from "./pages/Boutique";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Clips />} /> 
                    <Route path="/boutique" exact element={<Boutique />} /> 
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default App;
