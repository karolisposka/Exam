import React from "react";
import * as S from "./Heroo.styles";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const token = localStorage.getItem("token");

const Heroo = ({ title, subtitle, handleClick, rotate }) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.StyledSection>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        </S.TitleWrapper>
        <S.TextWrapper>
          <S.Text>
            Hello world for everyone. Nice to see you here Hello world for
            everyone. Nice to see you here Hello world for everyone. Nice to see
            you here Hello world for everyone. Nice to see you here
          </S.Text>
        </S.TextWrapper>
        {!token && (
          <S.ButtonsWrapper>
            <S.StyledButton
              text="login"
              handleClick={() => {
                navigate("/login");
              }}
            ></S.StyledButton>
            <S.StyledButton
              text="Register"
              handleClick={() => {
                navigate("/register");
              }}
            ></S.StyledButton>
          </S.ButtonsWrapper>
        )}
        <S.ArrowWrapper>
          <S.Arrow
            icon={faArrowCircleDown}
            handleClick={handleClick}
            rotate={rotate}
          />
        </S.ArrowWrapper>
      </S.StyledSection>
    </S.Container>
  );
};

export default Heroo;
