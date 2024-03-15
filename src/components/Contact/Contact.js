import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import classes from "./Contact.module.scss";

import SectionWrap from "../Ui/SectionWrap";

const Contact = function () {
  const { content } = useSelector((state) => state.app.footer);

  const formRef = useRef();

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        Array.from(entries[0].target.querySelectorAll("label")).forEach(
          (label) => {
            label.classList.remove(classes["label--init"]);
          }
        );
        observer.unobserve(entries[0].target);
      }
      // console.log(entries);
      // else {
      // entries[0].target
      // .querySelector(`.${classes.revealer}`)
      // .classList.remove(classes["revealer--reveal"]);
      // }
    }, observerOptions);

    observer.observe(formRef.current);
  }, []);

  return (
    <SectionWrap id="contact" subtitle="Contact" title="Let's talk">
      <form
        ref={formRef}
        className={classes.contact_form}
        action="https://formspree.io/f/myyllbzj"
        method="POST"
      >
        <p className={classes.input_wrap}>
          <label
            htmlFor="name"
            className={classes["label--init"]}
            style={{ "--delay": `${0 / 7}` }}
          >
            Name:
          </label>
          <input name="name" id="name" required type="text"></input>
        </p>
        <p className={classes.input_wrap}>
          <label
            htmlFor="email"
            className={classes["label--init"]}
            style={{ "--delay": `${1 / 7}` }}
          >
            Email:
          </label>
          <input name="email" id="email" required type="email"></input>
        </p>
        <p className={classes.input_wrap}>
          <label
            htmlFor="message"
            className={classes["label--init"]}
            style={{ "--delay": `${2 / 7}` }}
          >
            Message:
          </label>
          <textarea id="message" name="message" required></textarea>
        </p>
        <button type="submit">Send</button>
      </form>

      <div className={classes.footer}>
        <p>{content}</p>
      </div>
    </SectionWrap>
  );
};

export default Contact;
