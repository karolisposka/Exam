import Styled, { keyframes } from "styled-components";
import Button from "../Button/Button";

const deleteCard = keyframes`
    0%{
        opacity:1;
    }
    50%{
        opacity:0.5;
    }
    100%{
        opacity: 0;
    }
`;

export const Card = Styled.div`
    background:white;
    border:2px solid black;
    box-sizing:border-box;
    font-family: ${(props) => props.theme.fonts.name.primary};
    animation: ${(props) =>
      props.close ? `0.2s ${deleteCard} easein` : `none`};
`;

export const TitleSection = Styled.div`
    border-bottom: 2px solid rgba(0,0,0,0.2);
    display:flex;
    justify-content:space-between;
    margin:0.5rem;
    padding:0.25rem;
`;

export const CloseButton = Styled(Button)`
    align-items:center;
    background:transparent;
    border-radius:100%;
    color:red;
    display:flex;
    height:0.5rem;
    justify-content:center;
    padding:1rem;
    width:0.5rem;
`;

export const Title = Styled.div`
    font-weight: ${(props) => props.theme.fonts.sizes.bold};
    padding:0.5rem;
    text-transform: capitalize;
`;

export const Description = Styled.p`
    padding:1rem;

`;

export const ButtonsWrapper = Styled.div`
    display:flex;
    margin:1rem;
`;

export const StyledButton = Styled(Button)`
    background:transparent;
    border-radius:0.25rem;
    border:0.2rem solid ${(props) => props.theme.colors.background.secondary};
    padding:0.5rem;
    transition:0.3s ease;
    &:hover{
        background:${(props) => props.theme.colors.background.secondary};
        color:${(props) => props.theme.colors.text.light};
    }
    
    

`;

export const Tag = Styled.span`
    background:${(props) => props.theme.colors.background.secondary};
    border-radius:1rem;
    color: ${(props) => props.theme.colors.text.light};
    display:inline-block;
    margin:;
    margin:0.15rem;
    padding:0.5rem ;
    &&:first-of-type{
        margin-left:1rem
    }


`;
