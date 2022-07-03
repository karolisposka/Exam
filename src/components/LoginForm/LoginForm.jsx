import React, { useState } from "react";
import * as S from "./LoginForm.styles";
import FormInput from "../FormInput/FormInput";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import Footer from "../Footer/Footer";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({ handleSubmit, error }) => {
  const [data, setData] = useState();

  return (
    <>
      <S.Container>
        <S.StyledSection>
          <S.FormContainer>
            <S.Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(data);
              }}
            >
              <S.Title>Login</S.Title>
              <FormInput
                type="email"
                label="Email address"
                placeholder="example@example.com"
                icon={faUser}
                handleChange={(emailValue) =>
                  setData({ ...data, email: emailValue })
                }
              />
              <FormInput
                type="password"
                label="Password"
                placeholder="Password"
                icon={faLock}
                handleChange={(passwordValue) =>
                  setData({ ...data, password: passwordValue })
                }
              />
              <S.ButtonWrapper>
                <S.StyledButton type="submit" text="submit" />
                <S.StyledLink to="/register">Click to register</S.StyledLink>
              </S.ButtonWrapper>
              {error && <Notification>{error}</Notification>}
            </S.Form>
          </S.FormContainer>
        </S.StyledSection>
      </S.Container>
      <Footer />
    </>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;