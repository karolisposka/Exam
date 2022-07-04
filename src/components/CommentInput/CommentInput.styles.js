import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

export const CommentContainer = Styled.div`
    margin:0 auto;
    width:100%;
    overflow:hidden;
`;
export const Form = Styled.form`


`;

export const RatingsWrapper = Styled.div`
    padding:0.5rem;
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
    width:100%;
    box-sizing:border-box;
    padding:0.5rem;
    height: 80px;
    background:rgba(255,255,255,0.9);
    outline:none;

`;

export const SubmitButton = Styled(Button)`
    margin:1rem auto;
    background:${(props) => props.theme.colors.background.secondary};
    color:${(props) => props.theme.colors.text.light};
    border:none;
    padding:0.5rem;

`;
