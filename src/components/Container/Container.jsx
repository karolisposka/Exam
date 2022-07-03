import React from "react";
import * as S from "./Container.styles";

const Container = ({ children, className }) => {
  return (
    <S.Container className={className}>
      <S.StyledSection>{children}</S.StyledSection>
    </S.Container>
  );
};

export default Container;
