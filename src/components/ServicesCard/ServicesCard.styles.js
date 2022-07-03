import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = Styled.div`
      font-family: ${(props) => props.theme.fonts.name.primary};
      padding:1rem 0;
      
      @media(max-width:768px){
             &:not(:last-child){
            border-bottom: 0.1rem solid rgba(0,0,0,0.1);
            }
      };
      @media(min-width:768px){
            &:not(:last-child){
            border-right:  0.1rem solid rgba(0,0,0,0.1);
      }
      }
`;

export const Title = Styled.h1`
     text-align:center;
     font-size:1.2rem;

`;

export const Text = Styled.p`
      text-align:center;
      color:rgba(0,0,0,0.6);
      line-height:1.5rem;


`;

export const IconFrame = Styled.div`
      width:3rem;
      height:3rem;
      border-radius:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      border:0.1rem solid #a411ff;
      margin:0 auto;
`;

export const StyledIcon = Styled(FontAwesomeIcon)`
      color: #a411ff;



`;
