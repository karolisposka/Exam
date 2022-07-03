import React from "react";
import PropTypes from "prop-types";
import * as S from "./CheckBoxInput.styles";

const CheckBoxInput = ({ handleChange, label }) => {
  return (
    <S.InputBox>
      <S.Label> {label} </S.Label>
      <S.CheckBox
        type="checkbox"
        onChange={(e) => handleChange(e.target.value)}
      />
    </S.InputBox>
  );
};

CheckBoxInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckBoxInput;
