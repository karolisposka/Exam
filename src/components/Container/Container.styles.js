import Styled from "styled-components";
import Section from "../Section/Section";

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
