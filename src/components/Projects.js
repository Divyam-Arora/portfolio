import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classes from "./Projects.module.scss";
import Button from "./Ui/Buton";

import SectionWrap from "./Ui/SectionWrap";

const Projects = function () {
  const { projects } = useSelector((state) => state.app.projects);
  const listRef = useRef();

  const projLists = projects.map((proj) => {
    return (
      <li key={proj.title}>
        <div className={`${classes["revealer"]}`}></div>
        <article>
          <h1 className={classes.proj_name}>{proj.title}</h1>
          <h2 className={classes.proj_disc}>{proj.content}</h2>
        </article>
        <div className={classes.proj_links}>
          {proj.links.map((link) => {
            return (
              <Button key={link.title} link={link.link}>
                {link.title}
              </Button>
            );
          })}
        </div>
      </li>
    );
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        entries[0].target
          .querySelector(`.${classes.revealer}`)
          .classList.add(classes["revealer--reveal"]);

        observer.unobserve(entries[0].target);
      }
      // else {
      // entries[0].target
      // .querySelector(`.${classes.revealer}`)
      // .classList.remove(classes["revealer--reveal"]);
      // }
    }, observerOptions);

    Array.from(listRef.current.querySelectorAll("li")).forEach((list) => {
      observer.observe(list);
    });
  }, []);
  return (
    <SectionWrap id="projects" title="Projects">
      <ul ref={listRef} className={`${classes.projects_list} clear-fix`}>
        {projLists}
      </ul>
    </SectionWrap>
  );
};

export default Projects;
