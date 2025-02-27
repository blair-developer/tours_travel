import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetail from "./../pages/TourDetail";
import  Login from "./../pages/login";
import Register from "./../pages/Register";
import searchResultlist from "./../pages/searchResultlist";
import Thankyou from '../pages/Thankyou';

const Routers = () => {
  return (
    <Routes>
       <Route path='/' element={<Navigate to='/home'/>} />
       <Route path='/home' element={<Home/>} />
       <Route path='/tours' element={<Tours/>} />
       <Route path='/tours/:id' element={<TourDetail/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/thank-you' element={<Thankyou/>} />
       <Route path='/tours/search' element={<searchResultlist/>} />
    </Routes>
  )
}

export default Routers
