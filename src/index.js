import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS setup is included here
import App from "./App"; // Main App component
import reportWebVitals from "./reportWebVitals"; // Optional for performance monitoring

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
