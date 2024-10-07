import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
