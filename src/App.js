import { useSelector, useDispatch } from "react-redux";
import { scrollActions } from "./store";
import { useEffect } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Logo from "./components/nav/Logo";
import Menu from "./components/nav/Menu";
import Contact from "./components/nav/Contact";
import ScrollTop from "./components/nav/ScrollTop";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.onscroll = function (e) {
      const scroll = window.scrollY;
      dispatch(scrollActions.setScroll(scroll));
    };
  }, []);

  return (
    <>
      <Logo />
      <Menu />
      <Contact />
      <ScrollTop />
      <main id="main">
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
