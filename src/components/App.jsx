import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Navbar from './Navbar';
import Footer from "./Footer";
import Home from "./Home";

function App(){
    return(
        <Router>
            <Navbar />  

            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>

            <Footer />
        </Router>
    )
}

export default App;