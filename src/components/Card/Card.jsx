import React from "react";
import * as S from "./Card.styles";
import profile from "../../Assets/profile.png";
import PropTypes from "prop-types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Card = ({ name, text, rating, time }) => {
  return (
    <S.Card>
      <S.Image src={profile} alt="avatar" />
      <S.Title>{name}</S.Title>
      <S.ratingWrapper>
        {[...Array(Math.round(rating))].map((item, index) => {
          return <S.Stars icon={faStar} key={index} />;
        })}
      </S.ratingWrapper>
      <S.Text>{text}</S.Text>
      <S.InfoWrapper>
        <div>{new Date(time).toLocaleString()}</div>
      </S.InfoWrapper>
    </S.Card>
  );
};

Card.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Card;
