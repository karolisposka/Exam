import Styled from "styled-components";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import Select from "react-select";

export const Container = Styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    padding-top:4rem;
    width:100%;
    @media(max-width:768px){
        width:100%;
    }
`;

export const FormContainer = Styled.div`  
`;

export const Form = Styled.form`
    background:${(props) => props.theme.colors.background.light};
    border-radius:1rem;
    border:1px solid black;
    border:none;
    box-sizing:border-box;
    box-sizing:border-box;
    padding:1rem;    
`;

export const StyledSelect = Styled(Select)`
    margin:0 1.5rem;
    &:first-child{
      display:inline;
       width:10rem;
    }
`;

export const StyledFormInput = Styled(FormInput)`
    

    
`;

export const SelectsWrapper = Styled.div`
    align-items:center;
    display:flex;
    justify-content:space-between;
`;

export const buttonWrapper = Styled.div`
    display:flex;
    justify-content:flex-end;
    margin: 1.5rem;
`;

export const StyledButton = Styled(Button)`
    background:${(props) => props.theme.colors.background.secondary};
    border-radius:0.25rem;
    border:none;
    color:${(props) => props.theme.colors.text.light};
    padding:0.5rem;
`;
