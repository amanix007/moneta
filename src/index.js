import React from "react";
import ReactDOM from "react-dom";

console.log('index? ', document.getElementById("index"));

const Index = () => {
  return (
    <div>
      <h1>Moneta</h1>
      <p>Flash Card application</p>
    </div>
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById("index")
);