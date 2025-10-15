import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Accordions from "./pages/Accordions";
import Navbar from "./components/Navbar/Navbar";
import EmiCalculator from "./components/emi-calculator/emi-calculator";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordions />} />
        <Route path="/emi-calculator" element={<EmiCalculator />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
