import Styled from "styled-components";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export const Container = Styled.div`
    width:100%;
    padding-top:10rem;
    display:Flex;
    justify-content:center;
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
    margin:${(props) => props.theme.sizes.spacing.medium};
    padding:${(props) => props.theme.sizes.spacing.medium};
    background:${(props) => props.theme.colors.background.light};
    border-radius:${(props) => props.theme.sizes.radius.small};
    position:relative;
    box-sizing:border-box;
    @media(max-width:768px){
        margin:${(props) => props.theme.sizes.spacing.small};
        padding:${(props) => props.theme.sizes.spacing.small};
    }
`;
export const Title = Styled.h1`
    margin:${(props) => props.theme.sizes.spacing.hard};
    color:${(props) => props.theme.colors.text.primary};

`;

export const ButtonWrapper = Styled.div`
    display:Flex;
    justify-content:space-between;
    align-items:center;
    margin:${(props) => props.theme.sizes.spacing.hard};
`;

export const StyledLink = Styled(Link)`
    text-decoration: none;
`;

export const StyledButton = Styled(Button)`
    background: ${(props) => props.theme.colors.background.secondary};
    padding: ${(props) => props.theme.sizes.spacing.small};
    border:none;
    color:${(props) => props.theme.colors.text.light};
    border-radius:0.25rem;

`;
