import React from "react";
import Homepage from "./pages/homepage/homepage";
import HomepageNav from "./components/homepage-nav/homepage-nav";
import "./App.style.scss";

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Homepage></Homepage>
    </div>
  );
};

export default App;
