import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GenerateKeys from "./components/GenerateKeys";
import Sender from "./components/Sender";
import Receiver from "./components/Receiver";
import Eve from "./components/Eve";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<GenerateKeys />} />
          <Route path="/sender" element={<Sender />} />
          <Route path="/receiver" element={<Receiver />} />
          <Route path="/eve" element={<Eve />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
