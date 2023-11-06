import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import InjectTailwind from "@/InjectTailwind.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <InjectTailwind>
        <App />
      </InjectTailwind>
    </BrowserRouter>
  </React.StrictMode>
);
