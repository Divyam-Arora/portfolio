const Button = function (props) {
  const buttonClickHandler = () => {
    if (window.location.href === props.link) {
    } else {
      window.open(props.link);
    }
  };
  return (
    <button className={props.class ?? ""} onClick={buttonClickHandler}>
      {props.children}
    </button>
  );
};

export default Button;
