import React from "react";
import * as S from "./Card.styles";
import profile from "../../Assets/profile.png";
import PropTypes from "prop-types";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
const Card = ({ name, text, handleClick, rating }) => {
  return (
    <S.Card>
      <S.Image src={profile} alt="hi" />
      <S.Title>{name}</S.Title>
      <S.ratingWrapper>
        {[...Array(Math.round(rating))].map((item, index) => {
          return <S.Stars icon={faStar} key={index} />;
        })}
      </S.ratingWrapper>
      <S.Text>{text}</S.Text>
      <S.LikesWrapper>
        <S.LikesButton onClick={() => handleClick(alert("hi"))}>
          <S.StyledIcon icon={faThumbsUp} />
        </S.LikesButton>
      </S.LikesWrapper>
    </S.Card>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  number: PropTypes.number.isRequired,
};

export default Card;