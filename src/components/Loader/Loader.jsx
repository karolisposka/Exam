import React from "react";
import * as S from "./Loader.styles";

const Loader = () => {
  return (
    <S.LoaderContainer>
      <S.StyledSection>
        <S.Loader />
      </S.StyledSection>
    </S.LoaderContainer>
  );
};

export default Loader;
