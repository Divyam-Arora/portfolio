const Button = function (props) {
  const buttonClickHandler = () => {
    window.open(props.link);
  };
  return (
    <button className={props.class ?? ""} onClick={buttonClickHandler}>
      {props.children}
    </button>
  );
};

export default Button;
