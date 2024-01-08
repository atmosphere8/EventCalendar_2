import "@styles/sass/style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilterProvider } from "@contexts/FilterContext";

import Header from "@components/structure/Header";
import Main from "@pages/Main";
import AboutEvent from "@pages/AboutEvent";
import Footer from "@components/structure/Footer";

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

          <Footer />
        </FilterProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
