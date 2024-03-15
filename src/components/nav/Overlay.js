import React from "react";
import classes from "./Overlay.module.scss";
import Logo from "./Logo";
function Overlay() {
  return (
    <div className={classes.overlay}>
      <div className={classes.topleft}>
        <Logo />
      </div>
    </div>
  );
}

export default Overlay;
