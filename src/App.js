import { useSelector, useDispatch } from "react-redux";
import { hashActions } from "./store";
import { useEffect } from "react";

import NavBundle from "./components/nav/NavBundle";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact/Contact";

function App() {
  const { menu } = useSelector((state) => state.app.nav);
  const dispatch = useDispatch();
  // const { isOpen } = useSelector((state) => state.menu);
  // const { hash } = useSelector((state) => state.hash);

  // useEffect(() => {
  //   if (
  //     window.location.hash.length > 0 &&
  //     !menu.find((value) => {
  //       return value.toLowerCase() === window.location.hash.slice(1);
  //     })
  //   ) {
  //     window.location.replace(`#home`);
  //   }

  //   // dispatch(hashActions.setHash(window.location.hash.slice(1)));

  //   const sections = menu.map((item) => {
  //     const secId = item.toLowerCase();
  //     const sec = document.getElementById(secId);
  //     const head = sec.querySelector(`#${secId}_head`);

  //     return { secId, section: sec, head: head };
  //   });

  //   document.body.onscroll = function (e) {
  //     const scroll = window.pageYOffset;
  //     sections.forEach((sec) => {
  //       if (scroll + 2 >= sec.section.offsetTop) {
  //         if (
  //           scroll + sec.head.offsetHeight + 1 >
  //           sec.section.offsetTop + sec.section.offsetHeight
  //         ) {
  //           if (sec.head.classList.contains("sec_head--fixed")) {
  //             sec.head.classList.remove("sec_head--fixed");
  //             sec.head.classList.add("sec_head--bottom");
  //           }
  //         } else {
  //           if (
  //             sec.head.classList.contains("sec_head--top") ||
  //             sec.head.classList.contains("sec_head--bottom")
  //           ) {
  //             sec.head.classList.remove("sec_head--top");
  //             sec.head.classList.add("sec_head--fixed");
  //             sec.head.classList.remove("sec_head--bottom");
  //             dispatch(hashActions.setHash(sec.secId));
  //           }
  //         }
  //       } else {
  //         if (sec.head.classList.contains("sec_head--fixed")) {
  //           sec.head.classList.add("sec_head--top");
  //           sec.head.classList.remove("sec_head--fixed");
  //         }
  //       }
  //       // console.log(scroll, sec.section.offsetTop + sec.section.offsetHeight);
  //     });
  //   };
  // }, [menu, dispatch]);

  return (
    <>
      {/* <NavBundle /> */}
      <main id="main">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
