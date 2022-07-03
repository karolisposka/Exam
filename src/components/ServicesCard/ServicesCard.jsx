import React from "react";
import * as S from "./ServicesCard.styles";

const ServicesCard = ({ className, title, text, icon }) => {
  return (
    <S.Card className={className}>
      <S.IconFrame>
        <S.StyledIcon icon={icon} />
      </S.IconFrame>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Card>
  );
};

export default ServicesCard;
