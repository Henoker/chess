// src/App.js
import React from 'react';
// import Matrix from './components/Matrix';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Guideline from './components/Guideline';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




const App = () => {
  // const colors = [
  //   'bg-yellow-500',
  //   'bg-green-500',
  //   'bg-green-500',
  //   'bg-red-500',
  //   'bg-yellow-500',
  //   'bg-green-500',
  //   'bg-red-500',
  //   'bg-red-500',
  //   'bg-yellow-500',
  // ];

  

  return (
    <>
    <Router>
    <Header />
   
    
    <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/guideline" element={<Guideline />} />
            </Routes>
    </Router>
    </>
  );
};

export default App;

