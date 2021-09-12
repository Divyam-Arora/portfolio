import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./Certifications.module.scss";
import Button from "./Ui/Buton";

import SectionWrap from "./Ui/SectionWrap";

const Certifications = function () {
  const { certifications } = useSelector((state) => state.app.certifications);

  const listRef = useRef();

  const observerOptions = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      Array.from(entries[0].target.querySelectorAll("li")).forEach((list) => {
        list.querySelector("figure").classList.remove(classes["figure--fade"]);
        list
          .querySelector("article")
          .classList.remove(classes["article--fade"]);
      });
      observer.unobserve(entries[0].target);
    }
    // else {
    // entries[0].target
    // .querySelector(`.${classes.revealer}`)
    // .classList.remove(classes["revealer--reveal"]);
    // }
  }, observerOptions);

  const certificationsList = certifications.map((certificate, i) => {
    return (
      <li key={certificate.title}>
        <figure
          className={classes["figure--fade"]}
          style={{
            backgroundImage: `url(${certificate.imgSrc})`,
            "--delay": i / 7,
          }}
        ></figure>
        <div className={classes.certificate_info}>
          <article
            className={classes["article--fade"]}
            style={{ "--delay": i / 7 }}
          >
            <h1>{certificate.title}</h1>
            <h2>{certificate.platform}</h2>
          </article>
          <Button link={certificate.link}>View</Button>
        </div>
      </li>
    );
  });

  useEffect(() => {
    observer.observe(listRef.current);
  }, []);

  return (
    <SectionWrap id="certifications" title="Certifications">
      <ul ref={listRef} className={`${classes.certifications_list} clear-fix`}>
        {certificationsList}
      </ul>
    </SectionWrap>
  );
};

export default Certifications;
