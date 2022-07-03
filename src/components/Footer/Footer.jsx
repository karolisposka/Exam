import React, { useState } from "react";
import * as S from "./Footer.styles";
import PropTypes from "prop-types";

const Footer = () => {
  const [actived, setActived] = useState(false);
  console.log(actived);
  return (
    <>
      <S.Footer>
        <S.StyledSection>
          <S.Navbar>
            <S.Link
              onClick={() => {
                setActived(!actived);
              }}
            >
              Home
            </S.Link>
            <S.Link>Contacts</S.Link>
            <S.Link>Customer Service</S.Link>
          </S.Navbar>
          <S.Text>
            &copy; {new Date().getFullYear()} U.S Copyright Office
          </S.Text>
        </S.StyledSection>
      </S.Footer>
    </>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
