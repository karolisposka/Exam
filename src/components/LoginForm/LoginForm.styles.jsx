import Styled from "styled-components";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export const Container = Styled.div`
    display:Flex;
    justify-content:center;
    padding-top:4rem;
    width:100%;
    @media(max-width:768px){
        width:100%;
        padding-top:5rem;
    }
`;

export const FormContainer = Styled.div`
    width:50%;
    @media(max-width:768px){
        width:100%;
    }
    
`;

export const Form = Styled.form`
    margin:1rem;
    padding:1rem;
    background:${(props) => props.theme.colors.background.light};
    border-radius:0.5rem;
    position:relative;
    box-sizing:border-box;
    @media(max-width:768px){
        margin:0.5rem;
        padding:0.5rem;
    }
`;
export const Title = Styled.h1`
    margin:1.5rem;
    font-size:1.2rem;
    color:${(props) => props.theme.colors.text.primary};

`;

export const ButtonWrapper = Styled.div`
    display:Flex;
    justify-content:space-between;
    align-items:center;
    margin:1.5rem;
`;

export const StyledLink = Styled(Link)`
    text-decoration: none;
`;

export const StyledButton = Styled(Button)`
    background: ${(props) => props.theme.colors.background.secondary};
    padding: 0.5rem;
    border:none;
    color:${(props) => props.theme.colors.text.light};
    border-radius:0.25rem;

`;
