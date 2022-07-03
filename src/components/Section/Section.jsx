import React from "react";
import * as S from "./Section.styles";

const Section = ({ children, className }) => {
  return <S.Section className={className}>{children}</S.Section>;
};

export default Section;
