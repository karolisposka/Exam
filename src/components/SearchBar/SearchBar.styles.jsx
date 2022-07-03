import Styled from "styled-components";
import Container from "../Container/Container";
import Section from "../Section/Section";
import Button from "../Button/Button";

export const SearchContainer = Styled(Container)`


    

`;

export const SearchForm = Styled.form`
    display:flex;
    border:1px solid black;
    width:100%;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    box-shadow: 1px 1px 1px 1px  rgba(0,0,0,0.3);
`;

export const Input = Styled.input`
    border: 0.01rem solid rgba(0,0,0,0.2);
    width:95%;
    margin: 0 auto;
    box-sizing:border-box;
    outline:none;
    border:none;
    padding-left:0.5rem;
    background:transparent;
    @media(max-width:768px){
        width:90%;
    }
    
`;

export const StyledSection = Styled(Section)`
    
                
`;

export const SearchButton = Styled(Button)`
    display:flex;
    width:5%;
    border:none;
    align-items:center;
    justify-content:center;
    background:transparent;
    border-left:1px solid black;
    transition:0.1s ease;
    padding:0.5rem;
    &:hover{
        color:#0b3254;
    }
    @media(max-width:768px){
        width:10%;
    }
`;
