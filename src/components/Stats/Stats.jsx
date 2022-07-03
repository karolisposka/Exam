import React from "react";
import * as S from "./Stats.styles";
import PropTypes from "prop-types";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Stats = ({ handleClick, display }) => {
  return (
    <S.viewContainer display={display}>
      <S.StyledSection>
        <S.TitleWrapper>
          <S.Title>Hello world</S.Title>
          <S.StyledButton icon={faClose} handleClick={handleClick} />
        </S.TitleWrapper>
      </S.StyledSection>
    </S.viewContainer>
  );
};

Stats.propTypes = {
  handleClick: PropTypes.func,
};

export default Stats;
