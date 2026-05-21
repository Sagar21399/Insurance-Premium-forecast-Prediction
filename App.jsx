import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Platform from "./pages/Platform";
import Models from "./pages/Models";
import Docs from "./pages/Docs";
import Pricing from "./pages/Pricing";
import AdaptiveLearning from "./pages/AdaptiveLearning";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/platform" element={<Platform />} />
        <Route path="/models" element={<Models />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/adaptive-learning" element={<AdaptiveLearning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;