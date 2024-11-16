import React from 'react';
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <>
      <div>
        <HashRouter>
          <Routes>
          <Route path="/" element={<Home />} />

          </Routes>
        </HashRouter>
       
      </div>
    </>
  )
}

export default App
