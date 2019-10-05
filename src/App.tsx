import React from "react";
import Homepage from "./pages/homepage/homepage";
import Nav from "../src/components/nav";
import "./App.style.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <Homepage></Homepage>
    </div>
  );
};

export default App;
