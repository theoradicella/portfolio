import { React } from 'react';
import { Routes, Route } from "react-router-dom";


const Router = () => {
  return (
    <Routes>
        {/* <Route path="/" element= {<h1>HOME</h1>} /> */}
        <Route path="/about" element= {<h1>ABOUT</h1>} />
        <Route path="/contact" element= {<h1>CONTACT</h1>} />
    </Routes>
  )
}

export default Router;