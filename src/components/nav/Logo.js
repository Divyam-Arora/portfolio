import React from "react";
// import logo from "../../assests/images/logo.png";
import { ReactComponent as MyLogo } from "../../assests/svgs/mylogo.svg";
import classes from "./Logo.module.scss";
import { useSelector } from "react-redux";

function Logo() {
  const { direction } = useSelector((state) => state.scroll);
  return (
    <div
      className={`${classes.logo} overlay-item top-left ${
        direction > 0 ? "" : "visible"
      }`}
    >
      <div className={classes.backdrop}></div>
      {/* <img src={logo} height={50} /> */}
      <MyLogo className={`${classes.icon}`} />
    </div>
  );
}

export default Logo;
