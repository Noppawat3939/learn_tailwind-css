import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Error, Home, Store } from "./pages";
import { Footer, Navbar } from "./layouts";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
