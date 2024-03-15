import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./Skills.module.scss";

import SectionWrap from "./Ui/SectionWrap";
import { Code, Database, Globe } from "@phosphor-icons/react";

// import skillLogos from "../assests/images/skills.png";
import { ReactComponent as SkillLogos } from "../assests/svgs/skills.svg";
import { ReactComponent as CSSLogo } from "../assests/svgs/css-3.svg";
import { ReactComponent as HTMLLogo } from "../assests/svgs/html-1.svg";
import { ReactComponent as JavascriptLogo } from "../assests/svgs/logo-javascript.svg";
import { ReactComponent as ReactLogo } from "../assests/svgs/react-2.svg";
import { ReactComponent as NextJSLogo } from "../assests/svgs/next-js.svg";
import { ReactComponent as SASSLogo } from "../assests/svgs/sass-1.svg";
import { ReactComponent as TypeScriptLogo } from "../assests/svgs/typescript.svg";
import { ReactComponent as JavaLogo } from "../assests/svgs/java-14.svg";
import { ReactComponent as SpringbootLogo } from "../assests/svgs/spring-3.svg";
import { ReactComponent as MYSQLLogo } from "../assests/svgs/mysql-6.svg";
import Highlight from "./Ui/Highlight";

const SKILLMAP = {
  frontend: [
    { name: "html", logo: <HTMLLogo /> },
    { name: "css", logo: <CSSLogo /> },
    { name: "javascript", logo: <JavascriptLogo /> },
    { name: "react", logo: <ReactLogo /> },
    { name: "nextjs", logo: <NextJSLogo /> },
    { name: "sass", logo: <SASSLogo /> },
    { name: "typescript", logo: <TypeScriptLogo /> },
  ],
  backend: [
    { name: "java", logo: <JavaLogo /> },
    { name: "springboot", logo: <SpringbootLogo /> },
    { name: "mysql", logo: <MYSQLLogo /> },
  ],
  misc: [{ name: "github", logo: "" }],
};

const Skills = function () {
  const skillsRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.5],
    };
    const action = (entries, observer) => {
      if (entries[0].isIntersecting) {
        console.log("yes");
        const type = entries[0].target.dataset.type;
        Object.entries(SKILLMAP).forEach((cat) => {
          if (cat[0] == type || type == "fullstack") {
            cat[1].forEach((skill) => {
              console.log(`.${classes.logos} svg #skillmap #${skill.name}`);
              const el = document.querySelector(
                `.${classes.logos} svg #skillmap #${skill.name}`
              );
              el?.classList?.remove(classes.hide);
            });
          } else {
            cat[1].forEach((skill) => {
              const el = document.querySelector(
                `.${classes.logos} svg #skillmap #${skill.name}`
              );
              el?.classList?.add(classes.hide);
            });
          }
        });
      }
    };
    const observer = new IntersectionObserver(action, options);
    document.querySelectorAll(`.${classes.section}`).forEach((sec) => {
      observer.observe(sec);
    });
  }, []);
  return (
    <SectionWrap id="skills" title="What I can do" subtitle="SKILLS">
      <div
        className={`grid grid-cols-2 grid-rows-4 relative ${classes.skills}`}
      >
        <div data-type="fullstack" className={classes.section}>
          <h3 className={classes.subheading}>Fullstack</h3>
          <Globe size={40} color="#849467" />
          <p>
            I possess a diverse skill set spanning both frontend and backend
            technologies. My expertise includes popular web development tools
            and frameworks such as React, Next.js, TypeScript, and Redux Toolkit
            on the frontend, while on the backend, I am skilled in Java, Spring
            Boot, SQL, Hibernate, and Spring Data JPA.
            <br />
            This broad range of skills makes me well-equipped for full-stack
            development, enabling me to contribute to various aspects of web
            application development.
          </p>
        </div>
        <div data-type="frontend" className={classes.section}>
          <h3 className={classes.subheading}>Frontend</h3>
          <Code size={40} color="#849467" />
          <p>
            I exhibit proficiency in modern frontend technologies, showcasing a
            command over frameworks like <Highlight>React</Highlight> and{" "}
            <Highlight>Next.js</Highlight>. My skills extend to{" "}
            <Highlight>TypeScript</Highlight> for enhanced code maintainability.
            <br />I demonstrate a strong understanding of state management
            through the use of <Highlight>Redux</Highlight> Toolkit.
            Additionally, my expertise encompasses styling with{" "}
            <Highlight>SCSS</Highlight>, contributing to the creation of
            visually appealing and responsive user interfaces.
          </p>
          <ul className={classes.logoList}>
            {SKILLMAP.frontend.map((skill) => (
              <li>{skill.logo}</li>
            ))}
          </ul>
        </div>
        <div data-type="backend" className={classes.section}>
          <h3 className={classes.subheading}>Backend</h3>
          <Database size={40} color="#849467" />
          <p>
            In the backend realm, I showcase adeptness in{" "}
            <Highlight>Java</Highlight> and <Highlight>Spring Boot</Highlight>,
            demonstrating a robust foundation for building scalable and
            efficient web applications. My proficiency extends to data
            management with <Highlight>SQL</Highlight>, employing Hibernate and
            Spring Data JPA to facilitate seamless interaction with databases.
            <br />
            With a focus on crafting server-side solutions, I bring a
            comprehensive skill set to the table, ensuring the architecture and
            functionality of applications are both resilient and
            well-structured.
          </p>
          <ul className={classes.logoList}>
            {SKILLMAP.backend.map((skill) => (
              <li>{skill.logo}</li>
            ))}
          </ul>
        </div>
        <div
          className={`col-start-2 row-start-1 row-span-full relative ${classes["logo-container"]}`}
        >
          <div className={classes.logos}>
            <SkillLogos ref={skillsRef} />
          </div>
        </div>
      </div>
    </SectionWrap>
  );
};

export default Skills;
