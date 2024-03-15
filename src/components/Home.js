// import classes from "./Home.module.scss";
import { useSelector } from "react-redux";
import SectionWrap from "./Ui/SectionWrap";
import classes from "./Home.module.scss";
import heroVideo from "../assests/videos/hero.mp4";
import hero1 from "../assests/images/test.jpg";
import { ReactComponent as Face } from "../assests/svgs/pic.svg";

const Home = function () {
  return (
    <>
      <div className={classes.home}>
        <section className={classes.hero}>
          <div className={`${classes.info} ${classes.infoBack}`}>
            <div className="home--name">Divyam Arora</div>
            <div className="home--work">Web Developer</div>
          </div>
          {/* <video autoPlay loop>
            <source src={heroVideo} />
          </video> */}
          <Face className={classes.face} />
          {/* <img src={hero1} /> */}
        </section>
      </div>
    </>
  );
};

export default Home;
