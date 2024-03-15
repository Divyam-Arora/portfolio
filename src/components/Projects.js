import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Projects.module.scss";
import Button from "./Ui/Buton";
// import hailee from "../assests/images/hailee.webp";
// import corinna from "../assests/images/corinna.jpeg";
// import lauren from "../assests/images/lauren.jpg";

import pc1 from "../assests/images/pc_screen_1.bmp";
import pc2 from "../assests/images/pc_screen_2.bmp";
import pc3 from "../assests/images/pc_screen_3.bmp";

import mobile1 from "../assests/images/mobile_1.bmp";
import mobile2 from "../assests/images/mobile_2.bmp";
import mobile3 from "../assests/images/mobile_3.bmp";

import Gallerie_PC from "../assests/images/Gallerie_PC.webp";
import Gallerie_Mobile from "../assests/images/Gallerie_Mobile.webp";
import Gallerie_Tablet from "../assests/images/Gallerie_Tablet.webp";
import IFGIF_PC from "../assests/images/IFGIF_PC.webp";
import IFGIF_Tablet from "../assests/images/IFGIF_Tablet.webp";
import IFGIF_Mobile from "../assests/images/IFGIF_Mobile.webp";
import Fooodify_PC from "../assests/images/Fooodify_PC.webp";
import Fooodify_Tablet from "../assests/images/Fooodify_Tablet.webp";
import Fooodify_Mobile from "../assests/images/Fooodify_Mobile.webp";

import { ReactComponent as EyeIcon } from "../assests/svgs/eye.svg";
import { ReactComponent as GithubIcon } from "../assests/svgs/github-logo.svg";

import SectionWrap from "./Ui/SectionWrap";

class Link {
  static #icons = {
    github: <GithubIcon />,
    live: <EyeIcon />,
  };
  constructor(type, link) {
    this.type = type;
    this.link = link;
  }

  static getIcon(type) {
    return this.#icons[type];
  }
}

const PROJECTS = new Map(
  Object.entries({
    "My Gallerie": {
      title: "My Gallerie",
      description: `Developed and launched a Progressive Web Application (PWA), "My
    Gallerie," designed to store, access, and seamlessly share media
    from any device or location.'`,
      stack: [
        "React",
        "React Router",
        "Redux Toolkit",
        "CSS modules",
        "Springboot",
        "MySQL",
      ],
      images: {
        pc: Gallerie_PC,
        mobile: Gallerie_Mobile,
        tablet: Gallerie_Tablet,
      },
      links: [
        new Link("github", "https://github.com/Divyam-Arora/galleryC"),
        new Link("live", "https://mygallerie.netlify.app"),
      ],
    },
    Fooodify: {
      title: "Fooodify",
      description: `Developed "Fooodify," a recipe search engine utilizing a 3rd party
    API, offering users the ability to persistently bookmark their
    favorite recipes and manage personal recipes.`,
      stack: ["Javascript", "HTML", "SCSS", "Modules"],
      images: {
        pc: Fooodify_PC,
        mobile: Fooodify_Mobile,
        tablet: Fooodify_Tablet,
      },
      links: [
        new Link("github", "https://github.com/Divyam-Arora/fooodify"),
        new Link("live", "https://da-fooodify.netlify.app"),
      ],
    },
    IFGIF: {
      title: "IFGIF",
      description: `Designed and implemented "IFGIF," a comprehensive GIF search
    engine and database allowing users to search, download, and
    upload GIFs.`,
      stack: ["Javascript", "Python", "Django", "ORM", "HTML", "CSS"],
      images: {
        pc: IFGIF_PC,
        mobile: IFGIF_Mobile,
        tablet: IFGIF_Tablet,
      },
      links: [
        new Link("github", "https://github.com/Divyam-Arora/ifgif"),
        new Link("live", "https://ifgif.pythonanywhere.com"),
      ],
    },
  })
);

const Projects = function () {
  const imgRef = useRef();
  const [currentPos, setCurrentPos] = useState(0);
  useEffect(() => {
    const options = {
      root: null,
      threshold: [0.6],
      rootMargin: "0px",
    };

    const action = function (entries, observer) {
      if (entries[0].isIntersecting) {
        // console.log(entries[0]);
        const pos = entries[0].target.dataset.pos;
        // console.log(pos);
        setCurrentPos(pos);
        console.log(pos);
      }
    };
    const observer = new IntersectionObserver(action, options);
    document
      .querySelectorAll(`.${classes.section}`)
      .forEach((el) => observer.observe(el));
  }, []);
  return (
    <SectionWrap id="projects" title="What I have done" subtitle="Projects">
      <div className={`grid grid-rows-3 grid-cols-2 ${classes.projects}`}>
        {[...PROJECTS.values()].map((project, i) => (
          <div
            data-name={project.title}
            data-pos={i}
            className={classes.section}
          >
            <span className={classes.num}>{i + 1}</span>
            <h3 className={classes.title}>{project.title}</h3>
            <p className={classes.desc}>{project.description}</p>
            <div className={classes.stack}>
              {project.stack.map((tech) => (
                <div>{tech}</div>
              ))}
            </div>
            <ul className={classes.links}>
              {project.links.map((link) => (
                <li>
                  <a href={link.link} target="_blank">
                    {Link.getIcon(link.type)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div
          className={`col-start-2 row-span-full relative ${classes.container}`}
        >
          {/* <div className={classes.preview}> */}
          <div className={classes.mockup}>
            <div className={classes.mobile}>
              <div className={classes.screen}>
                {[...PROJECTS.values()].map((p, i) => (
                  <img
                    src={p.images.mobile}
                    style={{ transform: `translateX(-${currentPos * 100}%)` }}
                  />
                ))}
              </div>
              <div className={classes.volume}></div>
              <div className={classes.power}></div>
            </div>
            <div className={classes.pc}>
              <div className={classes.screen}>
                {[...PROJECTS.values()].map((p, i) => (
                  <img
                    src={p.images.pc}
                    style={{ transform: `translateY(-${currentPos * 100}%)` }}
                  />
                ))}
              </div>
              <div className={classes.panel}></div>
              <div className={classes.stand}></div>
            </div>
            <div className={`${classes.tablet} ${classes.mobile}`}>
              <div className={classes.screen}>
                {[...PROJECTS.values()].map((p, i) => (
                  <img
                    src={p.images.tablet}
                    style={{ transform: `translateX(${currentPos * 100}%)` }}
                  />
                ))}
              </div>
              <div className={classes.volume}></div>
              <div className={classes.power}></div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </SectionWrap>
  );
};

export default Projects;
