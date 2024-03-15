import classes from "./Highlight.module.scss";
import { ReactComponent as Underline } from "../../assests/svgs/underline.svg";
function Highlight({ children }) {
  return (
    <span className={classes.highlight}>
      {children}
      <Underline />
    </span>
  );
}

export default Highlight;
