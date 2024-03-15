import classes from "./Menu.module.scss";
import { useSelector, useDispatch } from "react-redux";

const Menu = function () {
  const { scroll, direction } = useSelector((state) => state.scroll);

  const dispatch = useDispatch();

  return (
    <div
      className={`${classes.overlay} overlay-item top-right ${
        direction <= 0 ? "visible" : ""
      }`}
    >
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
    </div>
  );
};

export default Menu;
