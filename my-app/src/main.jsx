import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PopupContextProvider } from "./context/PopupContext";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
    <AuthProvider>
      <PopupContextProvider>
        <App />
      </PopupContextProvider>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
);
