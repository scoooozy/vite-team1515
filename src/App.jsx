import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maincontent from "./components/MainPage/MainPage";
import React from "react";
import LeadersPage from "./components/LeadersPage/LeadersPage";
import SponsorPage from "./components/SponsorPage/SponsorPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Maincontent />} path="/" />
          <Route element={<LeadersPage/>} path="/Leaders"/>
          <Route element={<SponsorPage/>} path="/Sponsor"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
