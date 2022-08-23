import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
