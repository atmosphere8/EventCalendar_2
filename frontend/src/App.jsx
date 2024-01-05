import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@pages/Main";
import AboutEvent from "@pages/AboutEvent";
import Header from "@components/structure/Header";
import { FilterProvider } from "@contexts/FilterContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FilterProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about/:id" element={<AboutEvent />} />
          </Routes>
        </FilterProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
