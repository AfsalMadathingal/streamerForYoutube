import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from 'react-router-dom';
import StreamingPage from "./pages/StreamingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/streaming" element={<StreamingPage/>} />
    </Routes>
    </>
  );
}

export default App;
