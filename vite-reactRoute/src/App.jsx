import React, {useState, createContext} from 'react';
import './bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CompanyReviews from "./pages/CompanyReviews";
import NavBar from "./pages/NavBar";
import SalaryGuide from "./pages/SalaryGuide";
import PostJob from "./pages/PostJob";


function App() {

  

  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="company-reviews" element={<CompanyReviews />} />
          <Route path="salary-guide" element={<SalaryGuide />} />
          <Route path="employers-or-post-job" element={<PostJob/>} />
        </Route>
        <Route path="sign-in" element={<SignUp />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
