import Styled from "styled-components";
import Button from "../Button/Button";

export const Container = Styled.div`
    width:50%;
    display:Flex;
    flex-direction:column;
    align-items:center;
    box-sizing:border-box;
    @media(max-width:768px){
        width:100%;
        margin:1rem;
    }
`;

export const FormContainer = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:4rem;
    @media(max-width:768px){
        padding-top:4rem;
    }
    
`;

export const Form = Styled.form`
    width:100%;
    margin:1rem;
    padding:1rem;
    background:${(props) => props.theme.colors.background.light};
    border-radius:0.5rem;
    box-sizing:border-box;
    min-height:25rem;
    position:relative;
`;

export const Title = Styled.h1`
    margin:1rem;
    font-size:1.5rem;
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
    margin:1.5rem;

`;

export const StyledButton = Styled(Button)`
    background:${(props) => props.theme.colors.background.primary};
    padding:0.5rem;
    color:${(props) => props.theme.colors.text.light};
    border-radius:0.25rem;
    border:none;
    &:last-child{
        margin-left:0.5rem;
    }
`;
