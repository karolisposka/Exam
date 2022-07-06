import React, { useState, useEffect } from "react";
import * as S from "./Navigation.styles";
import Section from "../Section/Section";
import PropTypes from "prop-types";
import { faBars, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = ({ links }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
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
    <S.Header scroll={scrollPosition || display}>
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
                  handleClick={() => {
                    return toggle();
                  }}
                >
                  {link.name}
                </S.StyledLink>
              ))}
            {token && location.pathname !== "/" && (
              <S.LogoutButton
                icon={faSignOut}
                handleClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              />
            )}
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
