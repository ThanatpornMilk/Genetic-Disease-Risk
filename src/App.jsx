import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./page/Welcome_Page";
import HomePage from "./page/Home_page";
import AutosomalDominant from "./page/Autosomal/AutosomalDominant";
import AutosomalDominantResult from "./page/Autosomal/AutosomalDominantResult";
import AutosomalRecessive from "./page/Autosomal/AutosomalRecessive";
import AutosomalRecessiveResult from "./page/Autosomal/AutosomalRecessiveResult";
import SexLinkedDominant from "./page/Sex_linked/Sex-linkedDominant";
import SexLinkedDominantResult from "./page/Sex_linked/SexLinkedDominantResult";
import SexLinkedRecessive from "./page/Sex_linked/SexLinkedRecessive";
import SexLinkedRecessiveResult from "./page/Sex_linked/SexLinkedRecessiveResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />

      <Route path="/autosomal-dominant" element={<AutosomalDominant />} />
      <Route path="/autosomal-dominant/result" element={<AutosomalDominantResult />} />

      <Route path="/autosomal-recessive/" element={<AutosomalRecessive />} />
      <Route path="/autosomal-recessive/result" element={<AutosomalRecessiveResult />} />

      <Route path="/x-linked-dominant/" element={<SexLinkedDominant />} />
      <Route path="/x-linked-dominant/result" element={<SexLinkedDominantResult />} />

      <Route path="/x-linked-recessive/" element={<SexLinkedRecessive />} />
      <Route path="/x-linked-recessive/result" element={<SexLinkedRecessiveResult />} />
    </Routes>
  );
}

export default App;
