import React from "react";
import PropTypes from "prop-types";
import * as S from "./Nodata.styles";

const Nodata = ({ text }) => {
  return (
    <S.NoDataContainer>
      <S.Text>{text}</S.Text>
    </S.NoDataContainer>
  );
};

Nodata.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Nodata;
