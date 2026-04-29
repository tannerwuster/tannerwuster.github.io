import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import JustForFun from "./pages/JustForFun.jsx";
import ShouldIBuyIt from "./pages/ShouldIBuyIt.jsx";
import FlippyClocky from "./pages/FlippyClocky.jsx";

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
      <Route path="/justforfun/shouldibuyit" element={<ShouldIBuyIt />} />
      <Route path="/justforfun/flippyclocky" element={<FlippyClocky />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
