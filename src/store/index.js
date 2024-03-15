import { configureStore, createSlice } from "@reduxjs/toolkit";
import linkedinLogo from "../assests/images/linkedin.png";
import githubLogo from "../assests/images/github.png";
import hamburgerIcon from "../assests/icons/hamburger.svg";
import profileImg from "../assests/images/profile.gif";
import javascriptLogo from "../assests/images/javascript.png";
import adobeXdLogo from "../assests/images/adobe_xd.png";
import htmlLogo from "../assests/images/html.png";
import reactLogo from "../assests/images/react.png";
import pythonLogo from "../assests/images/python.png";
import cppLogo from "../assests/images/cpp.png";
import sqlLogo from "../assests/images/sql.png";
import djangoLogo from "../assests/images/django.png";
import udemyLogo from "../assests/images/udemy.svg";
import courseraLogo from "../assests/images/coursera.svg";

const initialMenuState = { isOpen: false };
const initialScrollState = { scroll: 0, direction: 0 };
const initialAppState = {
  nav: {
    buttons: [
      {
        title: "Github",
        logoSrc: githubLogo,
        link: "https://github.com/Divyam-Arora",
      },
      {
        title: "Menu",
        iconSrc: hamburgerIcon,
      },
      {
        title: "Linkedin",
        logoSrc: linkedinLogo,
        link: "https://www.linkedin.com/in/divyam-arora-a86936174/",
      },
    ],
    menu: ["Home", "About", "Projects", "Skills", "Certifications", "Contact"],
  },
  home: {
    heading: "Home",
    name: "Divyam Arora",
    work: "UI Designer/ Developer", // use / to seperate multiple work title
  },
  about: {
    heading: "About",
    profileSrc: profileImg,
    social: [
      {
        title: "github",
        logoSrc: githubLogo,
        link: "https://github.com/Divyam-Arora",
      },
      {
        title: "Linkedin",
        logoSrc: linkedinLogo,
        link: "https://www.linkedin.com/in/divyam-arora-a86936174/",
      },
    ],
    paras: [
      "An enthusiastic and driven Computer Science graduate, born in India in 1999, currently looking to secure a developer position to utilise my strong programming skills and knowledge.",
      'Technology has the power to change the lives of the world and individuals, as the phrase "well-developed science and technology is indistinguishable from magic." I want to be a person who can always catch up with the latest technology and respond to changes. I think it is the mission of designers as well as engineers to promote innovation.',
    ],
  },
  projects: {
    heading: "Projects",
    projects: [
      {
        title: "Spacestagram",
        content:
          "A standalone react app for astronomy pictures of the day, powered by NASA's APOD API",
        links: [
          {
            title: "Github",
            link: "https://github.com/Divyam-Arora/spacestagram",
          },
          {
            title: "Website",
            link: "https://da-spacestagram.netlify.app/",
          },
        ],
      },
      {
        title: "My Portfolio Website",
        content:
          "A high-performance, Responsive website that uses the power of neumorphism user interface for enriching user experience.",
        links: [
          {
            title: "Github",
            link: "https://github.com/Divyam-Arora/portfolio",
          },
          {
            title: "Website",
            link: "https://divyam-portfolio.netlify.app/",
          },
        ],
      },
      {
        title: "Fooodify",
        content:
          "A web app for searching, displaying, bookmarking and uploading rescipes with a feature rich user interface.",
        links: [
          {
            title: "Github",
            link: "https://github.com/Divyam-Arora/fooodify",
          },
          {
            title: "Website",
            link: "https://da-fooodify.netlify.app/",
          },
        ],
      },
      {
        title: "IFGIF",
        content:
          "A GIF search engine and database to search for and upload gif images.",
        links: [
          {
            title: "Github",
            link: "https://github.com/Divyam-Arora/ifgif",
          },
          {
            title: "Website",
            link: "https://ifgif.pythonanywhere.com",
          },
        ],
      },
    ],
  },
  skills: {
    heading: "Skills",
    skills: [
      {
        title: "Javascript",
        progress: "85%",
        logoSrc: javascriptLogo,
      },
      {
        title: "HTML/CSS",
        progress: "80%",
        logoSrc: htmlLogo,
      },
      {
        title: "Adobe XD",
        progress: "80%",
        logoSrc: adobeXdLogo,
      },
      {
        title: "React",
        progress: "70%",
        logoSrc: reactLogo,
      },
      {
        title: "Python",
        progress: "65%",
        logoSrc: pythonLogo,
      },
      {
        title: "C/C++",
        progress: "60%",
        logoSrc: cppLogo,
      },
      {
        title: "SQL",
        progress: "50%",
        logoSrc: sqlLogo,
      },
      {
        title: "Django",
        progress: "40%",
        logoSrc: djangoLogo,
      },
    ],
  },
  certifications: {
    heading: "Certifications",
    certifications: [
      {
        title: "Javascript",
        platform: "Udemy",
        imgSrc: udemyLogo,
        link: "https://drive.google.com/file/d/100gdU_7WgiexI_yrDIpBgz6Nx6DvuRX9/view?usp=sharing",
      },
      {
        title: "Adobe XD",
        platform: "Udemy",
        imgSrc: udemyLogo,
        link: "https://drive.google.com/file/d/1pqwTdqvIkpzdCIo3FMIAnEjmIOHvj0KS/view?usp=sharing",
      },
      {
        title: "Django",
        platform: "Coursera",
        imgSrc: courseraLogo,
        link: "https://drive.google.com/file/d/1FLfrV2SWllWiD8Eumof9ZSuu-qVvgSSk/view?usp=sharing",
      },
      {
        title: "Web Design",
        platform: "Coursera",
        imgSrc: courseraLogo,
        link: "https://drive.google.com/file/d/1K6IgpV4_1ALP_oy2-q34_og6n_xT9gA_/view?usp=sharing",
      },
      {
        title: "Python",
        platform: "Coursera",
        imgSrc: courseraLogo,
        link: "https://drive.google.com/file/d/1OPns5tJSvuzYU-1bM-poTXJyTK9nE0E8/view?usp=sharing",
      },
    ],
  },
  contact: {
    heading: "Contact",
  },
  footer: {
    heading: "Footer",
    content:
      "© 2021, All rights reserved. The content, DA and D logo is protected and cannot be reused without prior permission.",
  },
};

const initialHashState = {
  hash: "home",
};

const menuSlice = createSlice({
  name: "Menu",
  initialState: initialMenuState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
});

const hashSlice = createSlice({
  name: "Hash",
  initialState: initialHashState,
  reducers: {
    setHash: (state, action) => {
      state.hash = action.payload;
    },
    removeHash: (state) => {
      state.hash = "";
    },
  },
});

const scrollSlice = createSlice({
  name: "scroll",
  initialState: initialScrollState,
  reducers: {
    setScroll: (state, action) => {
      state.direction = state.scroll - action.payload < 0 ? 1 : -1;
      state.scroll = Math.floor(action.payload);
      // state.direction = action.payload.direction;
    },
  },
});

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    app: appSlice.reducer,
    hash: hashSlice.reducer,
    scroll: scrollSlice.reducer,
  },
});

export const menuActions = menuSlice.actions;
export const hashActions = hashSlice.actions;
export const scrollActions = scrollSlice.actions;

export default store;
