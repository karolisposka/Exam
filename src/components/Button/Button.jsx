import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.styles";

const Button = ({ type, handleClick, icon, text, className, id }) => {
  return (
    <S.Button type={type} id={id} onClick={handleClick} className={className}>
      {text && <S.Text>{text}</S.Text>}
      {icon && <S.Icon icon={icon} />}
    </S.Button>
  );
};

Button.propTypes = {
  icon: PropTypes.object,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
