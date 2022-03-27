import { React } from 'react';
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';


const Router = () => {
  return (
    <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="*" element= {<Home />} />
    </Routes>
  )
}

export default Router;