import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./pages/authform";
import AuthSuccess from "./pages/authsuccess";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<AuthSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
