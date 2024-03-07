import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage";
import Auth from "./components/AuthenticationPage"
import SignUp from "./components/SignUpPage"
import Home from "./components/HomePage";
import Task from "./components/TaskPage";
import Viz from "./components/VisualizerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/visualize" element={<Viz />} /> 
      </Routes>
    </Router>
  );
}

export default App;
