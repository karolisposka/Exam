import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

export const CommentContainer = Styled.div`
    margin:0 auto;
    overflow:hidden;
    width:100%;
    height:300px;
`;
export const Form = Styled.form`


`;

export const RatingsWrapper = Styled.div`
    display:flex;
    justify-content:center;
    padding:0.5rem;
`;

export const Star = Styled(FontAwesomeIcon)`
    background:none;
    border:none;
    font-size:2rem;
`;

export const CommentWrapper = Styled.div`
    display:Flex;
    justify-content:Center;

`;
export const CommentInput = Styled.textarea`
    resize: none;
    display:block;
    box-sizing:border-box;
    padding:0.5rem;
    width:90%;
    height: 100px;
    text-align:center;
    background:rgba(255,255,255,0.9);
    outline:none;
`;

export const SubmitButton = Styled(Button)`
    background:${(props) => props.theme.colors.background.secondary};
    border:none;
    color:${(props) => props.theme.colors.text.light};
    margin:1rem auto;
    padding:0.5rem;
`;
