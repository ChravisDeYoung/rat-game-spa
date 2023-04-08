import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* can't use BrowserRouter on GitHub Pages */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
