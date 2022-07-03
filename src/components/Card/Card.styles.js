import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = Styled.div`
  width:100%;
  border:1px solid rgba(0,0,0,0.3);
  box-shadow:1px 2px 1px 1px rgba(0,0,0,0.3);
  max-height:30rem;
`;
export const Image = Styled.img`
  border-radius:10rem;
  width:5rem;
  display:block;
  margin: 2rem auto;
  box-shadow:1px 2px 1px 1px rgba(0,0,0,0.3);
  @media(max-width:768px){
    width:3rem;
    margin: 1rem auto;
  }
`;

export const ratingWrapper = Styled.div`
    display:flex;
    justify-content:center;
`;

export const Stars = Styled(FontAwesomeIcon)`
  color:gold;
  

`;

export const Title = Styled.h1`
  text-align:center;
  font-size:1.2rem;
`;

export const Text = Styled.p`
  padding:${(props) => props.theme.sizes.spacing.small};
  border-bottom: 1px solid rgba(0,0,0,0.1);
  
  
`;

export const LikesWrapper = Styled.div`
  display:flex;
  justify-content: flex-end;
  align-items:center;
  margin:${(props) => props.theme.sizes.spacing.hard};


`;

export const Likes = Styled.span`
  margin:${(props) => props.theme.sizes.spacing.small};
  font-size: 1.2rem;

`;

export const StyledIcon = Styled(FontAwesomeIcon)`
  color:blue;

`;

export const LikesButton = Styled.button`
  background:transparent;
  border:none;
  cursor:pointer;

`;
