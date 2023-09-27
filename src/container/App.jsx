import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPageSS';
import Breastplate from '../pages/BreastplatePage';
import FormBreastplate from "../components/organism/Form-Breastplate";
import navbarContexts from "../contexts/navbarContexts";
import { useState } from "react";

function App() {

  const [isNavbar, setIsNavbar] = useState(false);

  return (
    <BrowserRouter>
    <navbarContexts.Provider value={{isNavbar, setIsNavbar}}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Breastplate" element={<Breastplate />} />
        <Route path="/FormBreastplate" element={<FormBreastplate/>}/>
      </Routes>
      </navbarContexts.Provider>
    </BrowserRouter>
  );
}

export default App;
