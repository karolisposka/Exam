import React, { useState, useEffect } from "react";
import * as S from "./Navigation.styles";
import Section from "../Section/Section";
import PropTypes from "prop-types";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import Logo from "../../Assets/logo.svg";

const Navigation = ({ links }) => {
  const [display, setDisplay] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggle = () => {
    return setDisplay(!display);
  };

  const updateScrollPosition = () => {
    return setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    updateScrollPosition();
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return (
    <S.Header scroll={scrollPosition}>
      <Section>
        <S.Navigation>
          <S.LogoWrapper to="/">
            <S.Logo src={Logo} alt="Take a Pill" />
            <S.Title>Take A Pill</S.Title>
          </S.LogoWrapper>
          <S.HamubergerButton
            icon={faBars}
            handleClick={() => {
              toggle();
            }}
          />
          <S.NavBar>
            {links &&
              links.map((link, index) => (
                <S.StyledLink
                  to={link.path}
                  key={index}
                  scroll={scrollPosition}
                >
                  {link.name}
                </S.StyledLink>
              ))}
          </S.NavBar>
        </S.Navigation>
        {display && (
          <S.MobileNavBar>
            {links &&
              links.map((link, index) => (
                <S.StyledLink to={link.path} key={index} onClick={link.func}>
                  {link.name}
                </S.StyledLink>
              ))}
          </S.MobileNavBar>
        )}
      </Section>
    </S.Header>
  );
};

Navigation.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default Navigation;
