import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events.jsx";
import AboutEvent from "./pages/AboutEvent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/about/:id" element={<AboutEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
