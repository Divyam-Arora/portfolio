import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./Skills.module.scss";

import SectionWrap from "./Ui/SectionWrap";

const Skills = function () {
  const { skills } = useSelector((state) => state.app.skills);

  const listRef = useRef();

  const observerOptions = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      Array.from(entries[0].target.querySelectorAll("li")).forEach((list) => {
        list.querySelector("figure").classList.add(classes["logo--fill"]);
        list
          .querySelector(`.${classes["bar--empty"]}`)
          .classList.remove(classes["bar--empty"]);
      });
      observer.unobserve(entries[0].target);
    }
    // else {
    // entries[0].target
    // .querySelector(`.${classes.revealer}`)
    // .classList.remove(classes["revealer--reveal"]);
    // }
  }, observerOptions);

  const skillsList = skills.map((skill, i) => {
    return (
      <li key={skill.title} style={{ "--delay": i / 7 }}>
        <figure style={{ backgroundImage: `url(${skill.logoSrc})` }}></figure>
        <div className={classes.skill_info}>
          <div className={classes.skill_detail}>
            <h2>{skill.title}</h2>
            <h2>{skill.progress}</h2>
          </div>
          <div className={classes.skill_progress}>
            <div
              className={classes["bar--empty"]}
              style={{ width: skill.progress }}
            ></div>
          </div>
        </div>
      </li>
    );
  });

  useEffect(() => {
    observer.observe(listRef.current);
  }, []);

  return (
    <SectionWrap id="skills" title="Skills">
      <ul ref={listRef} className={`${classes.skills_list} clear-fix`}>
        {skillsList}
      </ul>
    </SectionWrap>
  );
};

export default Skills;
