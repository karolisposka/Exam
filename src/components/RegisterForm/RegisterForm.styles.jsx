import Styled from "styled-components";
import Section from "../Section/Section";
import Button from "../Button/Button";

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
    width:50%;
    margin:${(props) => props.theme.sizes.spacing.medium};
    padding:${(props) => props.theme.sizes.spacing.medium};
    background:${(props) => props.theme.colors.background.light};
    border-radius:${(props) => props.theme.sizes.radius.small};
    min-height:25rem;
    @media(max-width:768px){
        width:100%;
    }
    
`;

export const Title = Styled.h1`
    margin:${(props) => props.theme.sizes.spacing.medium};
    color: ${(props) => props.theme.colors.text.primary};
    
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
    margin:${(props) => props.theme.sizes.spacing.hard};
    margin-bottom: auto;
`;

export const StyledButton = Styled(Button)`
    background:${(props) => props.theme.colors.background.primary};
    padding:${(props) => props.theme.sizes.spacing.small};
    color:${(props) => props.theme.colors.text.light};
    &:last-child{
        margin-left:0.5rem;
    }
`;
