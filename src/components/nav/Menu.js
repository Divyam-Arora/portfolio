import classes from "./Menu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { menuActions } from "../../store";
// import { hashActions } from "../../store";

const Menu = function () {
  const { menu } = useSelector((state) => state.app.nav);
  const { isOpen } = useSelector((state) => state.menu);
  const { hash } = useSelector((state) => state.hash);
  const { scroll, direction } = useSelector((state) => state.scroll);

  const dispatch = useDispatch();

  const menuClickHandler = (e) => {
    dispatch(menuActions.toggle());
    // dispatch(hashActions.setHash(e.target.dataset.sec));
    // window.location.replace(`#${e.target.dataset.sec}`);
    document.getElementById(e.target.dataset.sec).scrollIntoView(true);
  };

  const buttons = menu.map((title) => (
    <button
      key={title.toLowerCase()}
      className={title.toLowerCase() === hash ? classes["button--active"] : ""}
      data-sec={title.toLowerCase()}
      onClick={menuClickHandler}
    >
      {title}
    </button>
  ));
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
