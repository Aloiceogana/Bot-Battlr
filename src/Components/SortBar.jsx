import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const SortBar = ({ handleSort }) => {
  return (
    <div className="sort-bar">
      <h3>Sort By:</h3>
      <button onClick={() => handleSort("armour")}>Health</button>
      <button onClick={() => handleSort("health")}>Damage</button>
      <button onClick={() => handleSort("damage")}>Armor</button>
    </div>
  );
};

export default SortBar;
