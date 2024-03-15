import { useSelector } from "react-redux";

import classes from "./About.module.scss";
import { ReactComponent as Laptop } from "../assests/svgs/laptop.svg";
import { ReactComponent as System } from "../assests/svgs/system.svg";

import SectionWrap from "./Ui/SectionWrap";
import Button from "./Ui/Buton";
import { useEffect, useState, useRef } from "react";
import Highlight from "./Ui/Highlight";

const About = function () {
  return (
    <SectionWrap id="about" subtitle="About" title="Who I am">
      <div className={`flex items-center w-full gap-52 ${classes.about}`}>
        <p className={`${classes.intro} section-desc`}>
          Greetings! I'm Divyam, a seasoned{" "}
          <Highlight>full-stack developer</Highlight> with two years of hands-on
          experience in the dynamic realm of web development. My passion lies in
          crafting innovative solutions, seamlessly blending creativity with
          technical prowess. Whether it's shaping captivating user interfaces or
          architecting robust server-side solutions, I thrive on bringing ideas
          to life in the digital space. Let's connect and explore the
          possibilities of turning your vision into reality!
        </p>
        {/* <Laptop /> */}
        <div className={`basis-2/5 ${classes.figure}`}>
          <System />
        </div>
      </div>
    </SectionWrap>
  );
};

export default About;
