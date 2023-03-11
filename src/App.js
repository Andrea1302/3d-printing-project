import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/bowls");
  }, []);
  return <div className="App">ciao</div>;
}

export default App;
