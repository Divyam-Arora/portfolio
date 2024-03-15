import classes from "./SectionWrap.module.scss";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { hashActions } from "../../store";
// import { scrollActions } from "../../store";
// import { hashActions } from "../../store";

const SectionWrap = function ({ id, subtitle, title, children }) {
  //   const sectionRef = useRef(null);
  //   const headRef = useRef(null);
  //   const dispatch = useDispatch();
  //   const windowHeight = window.innerHeight;

  //   const [hasVisited, setHasVisited] = useState(false);

  //   useEffect(() => {
  //     // console.log(sectionRef.current);
  //     const headHeight = headRef.current.offsetHeight;
  //     const observer = new IntersectionObserver(
  //       (entries, observer) => {
  //         if (entries[0].isIntersecting && !hasVisited) {
  //           setHasVisited(true);
  //         }
  //         if (hasVisited) {
  //           if (!entries[0].isIntersecting) {
  //             console.log(entries);
  //             dispatch(
  //               hashActions.setHash(entries[0].target.innerHTML.toLowerCase())
  //             );
  //           }
  //         }
  //       },
  //       {
  //         root: null,
  //         rootMargin: `-${headHeight}px 0px -${headHeight}px 0px`,
  //       }
  //     );

  //     observer.observe(headRef.current);
  //   }, [hasVisited, headRef, windowHeight, dispatch]);
  return (
    <section className={classes.sec_wrap} id={id}>
      <div className="heading-container">
        <h5 className="subheading">{subtitle}</h5>
        <h2 className="heading">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default SectionWrap;
