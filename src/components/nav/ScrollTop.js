import { ArrowFatUp, ArrowUp, CaretUp } from "@phosphor-icons/react";
import React from "react";
import { useSelector } from "react-redux";
import classes from "./ScrollTop.module.scss";

function ScrollTop() {
  const { scroll } = useSelector((s) => s.scroll);
  return (
    <div
      className={`overlay-item bottom-right cursor-pointer ${classes.btn} ${
        scroll > 500 ? "visible" : ""
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {/* <CaretUp size={32} color="#849467" weight="fill" /> */}
      {/* <ArrowUp size={32} color="#849467" weight="fill" /> */}
      <ArrowFatUp size={32} color="#b5bfa4" weight="fill" />
    </div>
  );
}

export default ScrollTop;
