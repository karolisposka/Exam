import Styled from "styled-components";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import Select from "react-select";

export const FormContainer = Styled.div`
    display:Flex;
    padding:${(props) => props.theme.sizes.spacing.medium};
    justify-content:center;
    align-items:center;
    padding-top:10rem;
`;

export const Form = Styled.form`
    box-sizing:border-box;
    border:1px solid black;
    padding:1rem;
    width:50%;
    background:white;
    border-radius:1rem;
    border:none;
    @media(max-width:768px){
        width:100%;
    }
    
`;

export const StyledSelect = Styled(Select)`
    margin: ${(props) => props.theme.sizes.spacing.medium};
    padding:${(props) => props.theme.sizes.spacing.hard};
    box-sizing: border-box;
    width:50%;
`;

export const StyledFormInput = Styled(FormInput)`
    width:50%;
`;

export const SelectsWrapper = Styled.div`
    display:flex;
    align-items:center;
`;

export const buttonWrapper = Styled.div`
    display:flex;
    justify-content:flex-end;
    margin: ${(props) => props.theme.sizes.spacing.hard};
`;

export const StyledButton = Styled(Button)`
    background:${(props) => props.theme.colors.background.secondary};
    padding:${(props) => props.theme.sizes.spacing.small};
    color:${[(props) => props.theme.colors.text.light]}



`;
