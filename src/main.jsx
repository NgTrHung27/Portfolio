/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 * Components
 */
import App from "./App.jsx";

/**
 * CSS Links
 */
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
