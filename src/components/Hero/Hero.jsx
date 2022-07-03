import React from "react";
import * as S from "../Hero/Hero.styles";
import PropTypes from "prop-types";
import { faCalendar, faMemory } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Hero = ({ title, subtitle, children }) => {
  const navigate = useNavigate();
  return (
    <S.ItemsContainer>
      <S.Hero>
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        <S.TextContainer>
          <S.TextWrapper>
            <S.StyledIcon icon={faCalendar} />
            <S.Text>Make easy to remember then to take your medicines</S.Text>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.StyledIcon icon={faMemory} />
            <S.Text>Track your medications consumption </S.Text>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.StyledIcon icon={faCalendar} />
            <S.Text>Make easy to connect with you doctor </S.Text>
          </S.TextWrapper>
          <S.StyledButton
            text={"Try Out"}
            handleClick={() => {
              navigate("/register");
            }}
          ></S.StyledButton>
        </S.TextContainer>
      </S.Hero>
      {children}
    </S.ItemsContainer>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Hero;
