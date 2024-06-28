// src/App.jsx
import React, { useEffect, useState } from "react";
import Hero from "./components/organisms/Hero";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";
import "./styles/variables.module.css";

const App = () => {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  let Component;
  switch (page) {
    case "#page1":
      Component = Page1;
      break;
    case "#page2":
      Component = Page2;
      break;
    case "#page3":
      Component = Page3;
      break;
    case "#page4":
      Component = Page4;
      break;
    default:
      Component = Hero;
  }

  return <Component />;
};

export default App;
