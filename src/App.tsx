import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";
import PairingView from "./components/PairingView";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pairing/:pairing" element={<PairingView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
