import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "aos/dist/aos.css";
import App from "./App.jsx";
import "./styles/sass/style.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
