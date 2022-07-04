import Styled from "styled-components";
import Button from "../Button/Button";
import Section from "../Section/Section";
import { Link } from "react-router-dom";

export const Container = Styled.div`
    width:100%;
    height:calc(100vh - 11.6rem);
    background: rgb(22,8,105);
    background: linear-gradient(135deg, rgba(22,8,105,1) 62.5%, rgba(164,17,255,1) 36%);
    @media(max-width:768px){
        height: calc(100vh - 9.1rem)
        }
`;

export const StyledSection = Styled(Section)`


`;

export const FormContainer = Styled.div`
    display:flex;
    justify-content:center;
    padding-top:10rem;
    @media(max-width:768px){
        padding-top:5rem;
    }
    
`;
export const Form = Styled.form`
    padding:1rem;
    width:50%;
    box-sizing:border-box;
    background:rgba(255,255,255);
    box-shadow: 1.5px 0px 8px 0px rgba(0,0,0,0.3);
    border-radius:${(props) => props.theme.sizes.radius.small};
    @media(max-width:768px){
        width:100%;
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

`;
