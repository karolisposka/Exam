import Styled, { keyframes } from "styled-components";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Section from "../Section/Section";

export const SwiperContainer = Styled.div`
   font-family:${(props) => props.theme.fonts.name.primary};
`;

const transition = keyframes`
   0%{
      height:0px;
   }
   100%{
      height:200px;
   }
`;

export const StyledContainer = Styled(Container)`
   background:none;
   height:100%;
   @media(max-width:768px){
      height:100%;
   }
`;

export const StyledSection = Styled(Section)`

`;

export const ButtonWrapper = Styled.div`
   display:flex;
   align-items:center;
   margin-top:1rem;
`;

export const Comment = Styled.span`
   margin-left:0.75rem;
   font-weight:700;
`;

export const StyledButton = Styled(Button)`
   width:3rem;
   height:3rem;
   border-radius:100%;
   background: transparent;
   border:3px solid ${(props) => props.theme.colors.background.primary};
   color: ${(props) => props.theme.colors.text.secondary};
`;

export const CommentFieldContainer = Styled.div`
   width:100%;
   height:250px;
   margin-top:1rem;
   background:${(props) => props.theme.colors.background.primary};
   animation: 0.2s ${transition} ease-in;
`;
