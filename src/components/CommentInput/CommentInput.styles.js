import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

export const CommentContainer = Styled.div`
    margin:0 auto;
    width: 1000px;
`;
export const Form = Styled.form`


`;

export const Input = Styled.input`
   display:hidden;
`;

export const Label = Styled.label`
    display:flex;
`;

export const RatingsWrapper = Styled.div`
    padding:1rem;
    display:flex;
    justify-content:center;
`;

export const Star = Styled(FontAwesomeIcon)`
    font-size:2rem;
    background:none;
    border:none;


`;

export const CommentInput = Styled.textarea`
    resize: none;
    width:1000px;
    margin-top:1rem;
    height: 100%;
    background:rgba(255,255,255,0.9);
    outline:none;

`;

export const SubmitButton = Styled(Button)`
    margin:1rem auto;

`;
