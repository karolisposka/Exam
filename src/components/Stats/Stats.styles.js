import Styled, { keyframes } from "styled-components";
import Button from "../Button/Button";
import Section from "../Section/Section";

const open = keyframes`
      0% {
    top:-50px;
    opacity:0;
  }
  
  50%{
    top:-25px;
    opacity:0.3;
  }

  100% {
    top:0;
    opacity:1;
  }
`;

const close = keyframes`
 0%{
    top:0;
 }

 50%{
    top:-50px;
 }

 100%{
    top:-200px;
 }

`;

export const viewContainer = Styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:680px;
    animation:0.2s ${open} ease-in;
`;

export const TitleWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    padding:1rem;
`;

export const Title = Styled.h1`

`;

export const StyledSection = Styled(Section)`
    border:0.1rem solid rgba(0,0,0,0.3);
    background:skyblue;

`;

export const StyledButton = Styled(Button)`
    border:none;
    padding:0.5rem;
    border-radius:2rem;

`;
