import classes from "./SectionWrap.module.scss";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { hashActions } from "../../store";
// import { scrollActions } from "../../store";
// import { hashActions } from "../../store";

const SectionWrap = function (props) {
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
    <section className={classes.sec_wrap} id={props.id}>
      <h1
        className={classes.sec_head + " sec_head--top"}
        id={`${props.id}_head`}
      >
        {props.title}
      </h1>
      {props.children}
    </section>
  );
};

export default SectionWrap;
