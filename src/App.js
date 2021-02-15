import React from "react";
import List from "./Components/List";
import "./styles.css";

export default function App() {
  document.body.style = "background: pink;";
  return (
    <div className="main">
      <List />
    </div>
  );
}
