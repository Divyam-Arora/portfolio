import classes from "./Nav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { menuActions } from "../../store";
import Button from "../Ui/Buton";

const Nav = function () {
  const { nav } = useSelector((state) => state.app);
  const { isOpen } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollEl = document.body;
    if (isOpen) {
      scrollEl.classList.add("no_scroll");
    } else {
      scrollEl.classList.remove("no_scroll");
    }
  }, [isOpen]);

  const menuHandler = () => {
    dispatch(menuActions.toggle());
  };
  return (
    <nav className={classes.nav}>
      <Button link={nav.buttons[0].link}>
        <img src={nav.buttons[0].logoSrc} alt="github" />
        {nav.buttons[0].title}
      </Button>
      <button
        onClick={menuHandler}
        className={`${classes.btn_menu} ${
          isOpen ? classes["btn--active"] : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="20.904"
          viewBox="0 0 27 20.904"
          className={isOpen ? classes["hamburger--close"] : ""}
        >
          <g id="Group_1" data-name="Group 1" transform="translate(1.5 1.5)">
            <path
              className={classes.path_1}
              id="Path_1"
              data-name="Path 1"
              d="M336,10.64h24"
              transform="translate(-336 -10.64)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              style={{ transition: "0.3s" }}
            />
            <path
              className={classes.path_2}
              id="Path_2"
              data-name="Path 2"
              d="M344,16h24"
              transform="translate(-344 -7.048)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              style={{ transition: "0.3s" }}
            />
            <path
              className={classes.path_3}
              id="Path_3"
              data-name="Path 3"
              d="M344,20.365h24"
              transform="translate(-344 -2.461)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              style={{ transition: "0.3s" }}
            />
          </g>
        </svg>
      </button>
      <Button link={nav.buttons[2].link}>
        <img src={nav.buttons[2].logoSrc} alt="linkedin" />
        {nav.buttons[2].title}
      </Button>
    </nav>
  );
};

export default Nav;
