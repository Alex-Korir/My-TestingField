import React from 'react';
import './App.css';
import ContactUs from './ContactUs';
import {Routes, Route} from 'react-router-dom'
import Test from './Test';
import Navbar from './Navbar';
import SearchFunctionality from './SearchFunctionality';
import Comments from './Comments';
import Footer from './Footer';
import Content from './Content';
import MaterialUI from "./MaterialUI"

function App() {
  return (
    <div>
      <MaterialUI/>
      <Content/>
      <Navbar/>
      <Footer/>
      <Comments/>
      <SearchFunctionality/>
      <Routes>
        <Route path='/' element={<ContactUs/>} />
        <Route path='test' element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;


