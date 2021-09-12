import classes from "./SectionHead.module.scss";

const SectionHead = function (props) {
  return <h1 className={classes.sec_head}>{props.title}</h1>;
};

export default SectionHead;
