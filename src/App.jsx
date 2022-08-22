import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
