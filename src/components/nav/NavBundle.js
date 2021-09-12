import Menu from "./Menu";
import Nav from "./Nav";
import classes from "./NavBundle.module.scss";

const NavBundle = function () {
  return (
    <section className={classes.bottom_nav}>
      <Menu />
      <Nav />
    </section>
  );
};

export default NavBundle;
