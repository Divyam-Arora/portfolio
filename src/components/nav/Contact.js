import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Contact.module.scss";
import { EnvelopeSimple, GithubLogo, Phone, X } from "@phosphor-icons/react";

function Contact() {
  const { direction } = useSelector((s) => s.scroll);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const callback = () => {
      setIsOpen(false);
      console.log("closed");
      document.removeEventListener("scroll", callback);
    };
    if (isOpen) {
      document.addEventListener("scroll", callback);
    }
  }, [isOpen]);
  return (
    <div
      className={`overlay-item bottom-left ${direction > 0 ? "" : "visible"}`}
    >
      <div
        className={`${classes.menu} ${isOpen ? "" : classes.close}`}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        <a
          href="mailto:divyamk.a.83@gmail.com"
          target="_blank"
          onClick={(e) => !isOpen && e.preventDefault()}
        >
          <div
            title="divyamk.a.83@gmail.com"
            className={`${classes.btn} ${classes.top}`}
          >
            <EnvelopeSimple size={24} color="#333" weight="bold" />
          </div>
        </a>
        <a
          href="tel:+917888315621"
          target="_blank"
          onClick={(e) => !isOpen && e.preventDefault()}
        >
          <div
            title="(+91) 7888315621"
            className={`${classes.btn} ${classes["top-right"]}`}
          >
            <Phone size={24} color="#333" weight="bold" />
          </div>
        </a>
        <a
          href="https://github.com/Divyam-Arora"
          target="_blank"
          onClick={(e) => !isOpen && e.preventDefault()}
        >
          <div
            title="https://github.com/Divyam-Arora"
            className={`${classes.btn} ${classes.right}`}
          >
            <GithubLogo size={24} color="#333" weight="bold" />
          </div>
        </a>
        <div
          className={`${classes.btn} ${classes.cross}`}
          onClick={() => isOpen && setIsOpen(false)}
        >
          <X size={24} color="#555" weight="bold" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
