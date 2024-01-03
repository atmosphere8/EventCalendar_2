import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "@pages/Events";
import AboutEvent from "@pages/AboutEvent";
import Header from "@components/general/Header";
import { FilterProvider } from "@contexts/FilterContext";

function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/about/:id" element={<AboutEvent />} />
        </Routes>
      </FilterProvider>
    </BrowserRouter>
  );
}

export default App;
