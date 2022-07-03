import Styled from "styled-components";
import Section from "../Section/Section";
import Button from "../Button/Button";

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
    align-items:center;
    padding-top:10rem;
    @media(max-width:768px){
        padding-top:5rem;
    }
    
`;

export const Form = Styled.form`
    width:500px;
    margin:${(props) => props.theme.sizes.spacing.medium};
    padding:${(props) => props.theme.sizes.spacing.medium};
    background:${(props) => props.theme.colors.background.secondary};
    border-radius:${(props) => props.theme.sizes.radius.small};
    height:25rem;
`;

export const Title = Styled.h1`
    margin:${(props) => props.theme.sizes.spacing.medium};
    color: ${(props) => props.theme.colors.text.light};
    
`;

export const ProgressBar = Styled.div`
    height:0.25rem;
    background:${(props) => props.theme.colors.text.success};
    box-sizing:border-box;
    display:inline-block;
`;

export const ProgressLeft = Styled.div`
    background:${(props) => props.theme.colors.text.primary};
    height:0.25rem;
    display:inline-block;
`;
export const ButtonsWrapper = Styled.div`
    display:flex;
    justify-content: flex-end;
`;

export const StyledButton = Styled(Button)`
    margin:0 ${(props) => props.theme.sizes.spacing.small};
`;
