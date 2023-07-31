import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Product } from "./pages/Product";
import GlobalStyles from "./styles/Globalstyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Products/:product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
