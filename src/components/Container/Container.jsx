import React from "react";
import * as S from "./Container.styles";

const Container = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default Container;
