import React, { useState } from "react";
import * as S from "./RegisterForm.styles";
import FormInput from "../FormInput/FormInput";
import CheckBoxInput from "../CheckBoxInput/CheckBoxInput";
import PropTypes from "prop-types";
import {
  faUser,
  faLock,
  faMailBulk,
  faArrowCircleRight,
  faArrowAltCircleLeft,
  faBucket,
} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = ({ handleSubmit }) => {
  const [data, setData] = useState({
    page: 0,
    username: "",
    email: "",
    password: "",
    first: "",
    last: "",
  });
  console.log(data.page);
  const forward = () => {
    return setData({ ...data, page: data.page + 1 });
  };

  const back = () => {
    return setData({ ...data, page: data.page - 1 });
  };

  const display = () => {
    <S.ProgressBar style={{ width: "50%" }} />;
    switch (data.page) {
      case 0:
        return (
          <S.Form>
            <S.ProgressBar style={{ width: `calc(50% * ${data.page + 1}` }} />
            <S.ProgressLeft
              style={{ width: `calc(100% - (50% * ${data.page + 1}))` }}
            />
            <S.Title>Register</S.Title>
            <FormInput
              type="text"
              label="Name"
              placeholder="Username"
              icon={faUser}
              handleChange={(usernameValue) => {
                setData({ ...data, username: usernameValue });
              }}
            />
            <FormInput
              type="email"
              label="Email address"
              placeholder="example@example.com"
              icon={faMailBulk}
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
            <S.ButtonsWrapper>
              <S.StyledButton
                type="button"
                icon={faArrowCircleRight}
                text="Next"
                handleClick={() => {
                  forward();
                }}
              />
            </S.ButtonsWrapper>
          </S.Form>
        );
      case 1:
        return (
          <S.Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(data);
            }}
          >
            <S.ProgressBar style={{ width: `calc(50% * ${data.page + 1}` }} />
            <S.ProgressLeft
              style={{ width: `calc(100% - (50% * ${data.page + 1}))` }}
            />
            <FormInput
              type="text"
              label="First Name"
              placeholder="First Name"
              icon={faLock}
              handleChange={(firstnameValue) =>
                setData({ ...data, first: firstnameValue })
              }
            />
            <FormInput
              type="text"
              label="Last Name"
              placeholder="Last name"
              icon={faLock}
              handleChange={(lastnameValue) =>
                setData({ ...data, last: lastnameValue })
              }
            />
            <CheckBoxInput />
            <S.ButtonsWrapper>
              <S.StyledButton
                type="button"
                icon={faArrowAltCircleLeft}
                text="Back"
                handleClick={() => {
                  back();
                }}
              />
              <S.StyledButton type="submit" icon={faBucket} text="submit" />
            </S.ButtonsWrapper>
          </S.Form>
        );
      default:
        return <div>loading...</div>;
    }
  };

  return (
    <S.Container>
      <S.StyledSection>
        <S.FormContainer>{display()}</S.FormContainer>
      </S.StyledSection>
    </S.Container>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default RegisterForm;
