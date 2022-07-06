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
  children: PropTypes.node,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.object,
  id: PropTypes.number,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

Button.defaultProps = {
  type: "button",
};

export default Button;
