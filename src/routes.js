import { React } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';


const Router = () => {
  return (
    <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element= {<h1>ABOUT</h1>} />
    </Routes>
  )
}

export default Router;