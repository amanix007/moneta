import React from "react";
import ReactDOM from "react-dom";

import './index.scss';


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