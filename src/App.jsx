import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MotionApp from "./MotionApp";
import GsapApp from "./GsapApp";
import Navigation from "./Navigation";
import ComparisonInfo from "./components/ComparisonInfo";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<MotionApp />} />
          <Route path="/gsap" element={<GsapApp />} />
        </Routes>
        <ComparisonInfo />
      </div>
    </Router>
  );
}

export default App;