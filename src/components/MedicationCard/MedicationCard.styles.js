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
    font-family: ${(props) => props.theme.fonts.name.primary};
    border:2px solid black;
    box-sizing:border-box;
    background:white;
    animation: ${(props) =>
      props.close ? `0.2s ${deleteCard} easein` : `none`};
`;

export const TitleSection = Styled.div`
    display:flex;
    justify-content:space-between;
    margin:${(props) => props.theme.sizes.spacing.small};
    border-bottom: 2px solid rgba(0,0,0,0.2);
    padding:0.25rem;
`;

export const CloseButton = Styled(Button)`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100%;
    width:0.5rem;
    height:0.5rem;
    padding:1rem;
    background:transparent;
    color:red;
    
`;

export const Title = Styled.div`
    padding:${(props) => props.theme.sizes.spacing.small};
    text-transform: capitalize;
    font-weight: ${(props) => props.theme.fonts.sizes.bold};
    
    
`;

export const Description = Styled.p`
    padding:${(props) => props.theme.sizes.spacing.medium};

`;

export const ButtonsWrapper = Styled.div`
    display:flex;
    margin:${(props) => props.theme.sizes.spacing.medium};
`;

export const StyledButton = Styled(Button)`
    padding:${(props) => props.theme.sizes.spacing.small};
    border-radius:0.25rem;
    transition:0.3s ease;
    background:transparent;
    border:0.2rem solid ${(props) => props.theme.colors.background.secondary};
    &:hover{
        background:${(props) => props.theme.colors.background.secondary};
        color:${(props) => props.theme.colors.text.light};
    }
    
    

`;

export const Tag = Styled.span`
    display:inline-block;
    margin:;
    padding:${(props) => props.theme.sizes.spacing.small} ;
    border-radius:1rem;
    margin:0.15rem;
    color: ${(props) => props.theme.colors.text.light};
    background:${(props) => props.theme.colors.background.secondary};
    &&:first-of-type{
        margin-left:${(props) => props.theme.sizes.spacing.medium}
    }


`;
