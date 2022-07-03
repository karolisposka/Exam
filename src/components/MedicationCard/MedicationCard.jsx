import React from "react";
import PropTypes from "prop-types";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import * as S from "./MedicationCard.styles";

const MedicationCard = ({
  title,
  description,
  key,
  id,
  className,
  handleClick,
  handleClick1,
  time,
  close,
}) => {
  return (
    <>
      <S.Card className={className} key={key} close={close}>
        <S.TitleSection>
          <S.Title>{title}</S.Title>
          <S.CloseButton
            id={id}
            icon={faXmark}
            handleClick={handleClick}
          ></S.CloseButton>
        </S.TitleSection>
        <S.Description>{description}</S.Description>
        {time && time.split(",").map((item) => <S.Tag>{item + ":00"}</S.Tag>)}
        <S.ButtonsWrapper>
          <S.StyledButton text="view" handleClick={handleClick1} />
        </S.ButtonsWrapper>
      </S.Card>
    </>
  );
};

MedicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number,
  handleClick: PropTypes.func,
  handleClick1: PropTypes.func,
};

export default MedicationCard;
