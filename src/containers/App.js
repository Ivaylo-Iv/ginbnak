import "./App.css";
import Nav from "../components/nav/Nav";
import Home from "../components/home/Home";
import PotrCredit from "../components/potrCredit/PotrCredit";

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("BG");
  return (
    <>
      <Nav navigate={navigate} lang={lang} setLang={setLang} />

      <Routes>
        <Route
          exact
          path="/"
          element={<Home navigate={navigate} lang={lang} />}
        />
        <Route
          exact
          path="/consumerCredit"
          element={<PotrCredit lang={lang} />}
        />
      </Routes>
    </>
  );
}

export default App;
