import Styled, { keyframes } from "styled-components";
import image from "../../Assets/background.jpg";
import Section from "../Section/Section";
import Button from "../Button/Button";

export const Container = Styled.div`
    background-image:url(${image});
    width:100%;
    height:100vh;
    background-size:cover;
`;

export const StyledSection = Styled(Section)`
    font-family:${(props) => props.theme.fonts.name.primary};
`;

export const TitleWrapper = Styled.div`
    color:${(props) => props.theme.colors.text.light};
    padding:2rem 0;
    @media (max-width:768px){
        padding-top:4rem;
    }
`;

export const Title = Styled.h1`
    margin:  ${(props) => props.theme.sizes.spacing.small} 0;
    font-weight:${(props) => props.theme.fonts.sizes.bold};
    font-size:3.5rem;
    text-align:Center;
    @media(max-width:768px){
        font-size:1.5rem;
    }

`;

export const Subtitle = Styled.span`
    color:${(props) => props.theme.colors.text.light};
    font-weight:${(props) => props.theme.fonts.sizes.bold};
    font-size:2.5rem;
    display:table;
    margin:0 auto;
    @media(max-width:768px){
        font-size:1.5rem;
    }

    
`;

export const TextWrapper = Styled.div`
    display:flex;
    align-items:center;
    color:${(props) => props.theme.colors.text.light};
    @media(max-width:768px){
        padding:2rem 0;
    }
`;

export const Text = Styled.p`
    margin: ${(props) => props.theme.sizes.spacing.medium} 0;
    font-size:1.2rem;
    text-align:center;
    line-height:2rem;
     @media(max-width:768px){
        font-size:1rem;
    }

`;

export const ButtonsWrapper = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:8rem 0;
    @media(max-width:768px){
        padding:2rem 0;
    }

`;

const hover = keyframes`
    0%{
        opacity:0.3
    }
    50%{
        opacity:0.7
    }
    100%{
        opacity:1;
    }
`;

export const StyledButton = Styled(Button)`
    width:10rem;
    text-align:center;
    text-transform:uppercase;
    padding:${(props) => props.theme.sizes.spacing.medium};
    border:none;
    opacity:0.3;
    
    &:hover{
       animation: 0.3s  ${hover} ease;
       opacity:1;
    }
    &:first-child{
        border-top-left-radius:2rem;
        border-bottom-left-radius:2rem;
        border-right: 0.1rem solid rgba(0,0,0,0.2);
    }
    &:last-child{
        border-top-right-radius:2rem;
        border-bottom-right-radius:2rem;
    }

`;

export const ArrowWrapper = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:4rem 0;
    @media(max-width:768px){
        padding:10rem 0;
    }
`;

export const shake = keyframes`
 0%{
    margin-top:0px;
    transform: rotate(0);
 }
 25%{
    margin-top:7px;
 }
 50%{
    margin-top:15px;
 }
 70%{
    margin-top:7px;
 }
 100%{
    margin-top:0px;
    transform: ${(props) =>
      props.rotate === true ? "rotate(180deg)" : "rotate(0)"};

 }
`;

export const Arrow = Styled(Button)`
    font-size:3rem;
    display:block;
    background:none;
    border:none;
    margin:0 auto;
    transform: ${(props) =>
      props.rotate === true ? "rotate('180deg')" : "rotate('0deg')"};
    color:${(props) => props.theme.colors.text.light};
    transition:0.3s;
    &:hover{
        animation: 1s ${shake} ease-in infinite;
    }


`;
