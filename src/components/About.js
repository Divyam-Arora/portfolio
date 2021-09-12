import { useSelector } from "react-redux";

import classes from "./About.module.scss";

import SectionWrap from "./Ui/SectionWrap";
import Button from "./Ui/Buton";
import { useEffect, useState, useRef } from "react";

const About = function () {
  const { about } = useSelector((state) => state.app);

  const [isVisible, setIsVisible] = useState(false);
  const socialRef = useRef();

  const buttons = about.social.map((button) => {
    return (
      <Button
        class={isVisible ? classes["btn--in"] : classes["btn--out"]}
        key={button.title}
        link={button.link}
      >
        <img src={button.logoSrc} alt={button.title}></img>
      </Button>
    );
  });
  const paras = about.paras.map((para, i) => {
    return <p key={`para${i.toString()}`}>{para}</p>;
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, observerOptions);

    observer.observe(socialRef.current);
  }, []);
  return (
    <SectionWrap id="about" title="About">
      <div ref={socialRef} className={classes.about_social}>
        <figure className={classes.about_profile}>
          <img src={about.profileSrc} alt="profile"></img>
        </figure>
        {buttons}
      </div>
      <div className={classes.sec_content}>{paras}</div>
    </SectionWrap>
  );
};

export default About;
