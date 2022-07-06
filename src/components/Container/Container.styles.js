import Styled from "styled-components";
import Section from "../Section/Section";

export const Container = Styled.div`
    background: linear-gradient(135deg, rgba(22,8,105,1) 62.5%, rgba(164,17,255,1) 36%);
    background: rgb(22,8,105);
    height:calc(100vh - 11.6rem);
    width:100%;
    @media(max-width:768px){
        height:100%;
        min-height: calc(100vh - 9.1rem);
    }
`;

export const StyledSection = Styled(Section)`


`;
