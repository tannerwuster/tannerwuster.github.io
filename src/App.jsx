import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import JustForFun from "./pages/JustForFun.jsx";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
  }, [lightMode]);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage lightMode={lightMode} setLightMode={setLightMode} />}
      />
      <Route path="/justforfun" element={<JustForFun />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
