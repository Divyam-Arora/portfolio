// import classes from "./Home.module.scss";
import { useSelector } from "react-redux";
import SectionWrap from "./Ui/SectionWrap";

const Home = function () {
  const { home } = useSelector((state) => state.app);
  const name = home.name.split(" ").map((part, i, arr) => {
    return (
      <p key={part}>
        {part} <br />
      </p>
    );
  });
  const work = home.work.split("/").map((part, i, arr) => {
    if (i === arr.length - 1) {
      return <p key={part}>{part}</p>;
    }
    return <p key={part}>{part}/</p>;
  });
  return (
    <>
      <SectionWrap id="home">
        <div className="home--name">{name}</div>
        <div className="home--work">{work}</div>
      </SectionWrap>
    </>
  );
};

export default Home;
