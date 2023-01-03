import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./reset.css";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
