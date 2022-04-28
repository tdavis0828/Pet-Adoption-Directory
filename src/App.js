import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Layout from './components/pages/Layout';

function App() {
  return (
    <>
      <Routes>
          <Route path = '/' element= {<Layout />} >
            <Route index element= {<Home />} />
            <Route path='about' element={<About />} />
          </Route>
          
      </Routes>
    </>
  );
}

export default App
