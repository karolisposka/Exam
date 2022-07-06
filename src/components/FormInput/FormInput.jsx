import React from "react";
import * as S from "./FormInput.styles";

import PropTypes from "prop-types";

const FormInput = ({
  handleChange,
  type,
  placeholder,
  value,
  icon,
  label,
  className,
}) => {
  return (
    <S.InputBox className={className}>
      <S.Label>{label}</S.Label>
      {icon && <S.Icon icon={icon} />}
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </S.InputBox>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "password", "email"]),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default FormInput;
