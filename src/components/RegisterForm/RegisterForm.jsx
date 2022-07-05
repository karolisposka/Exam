import React, { useState } from "react";
import * as S from "./RegisterForm.styles";
import Container from "../Container/Container";
import FormInput from "../FormInput/FormInput";
import CheckBoxInput from "../CheckBoxInput/CheckBoxInput";
import Notification from "../Notification/Notification";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  faUser,
  faLock,
  faMailBulk,
  faArrowCircleRight,
  faArrowAltCircleLeft,
  faBucket,
} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = ({ handleSubmit, error }) => {
  const [data, setData] = useState({
    page: 0,
    username: "",
    email: "",
    password: "",
    first: "",
    last: "",
  });

  const forward = () => {
    return setData({ ...data, page: data.page + 1 });
  };

  const back = () => {
    return setData({ ...data, page: data.page - 1 });
  };

  const displayTable = () => {
    return (
      <>
        <S.Container>
          {error && <Notification>${error}</Notification>}
          <S.Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(data);
            }}
          >
            {(() => {
              switch (data.page) {
                case 0:
                  return (
                    <>
                      <S.ProgressBar
                        style={{ width: `calc(50% * ${data.page + 1}` }}
                      />
                      <S.ProgressLeft
                        style={{
                          width: `calc(100% - (50% * ${data.page + 1}))`,
                        }}
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
                    </>
                  );
                case 1:
                  return (
                    <>
                      <S.ProgressBar
                        style={{ width: `calc(50% * ${data.page + 1}` }}
                      />
                      <S.ProgressLeft
                        style={{
                          width: `calc(100% - (50% * ${data.page + 1}))`,
                        }}
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

                      <S.ButtonsWrapper>
                        <S.StyledButton
                          type="button"
                          icon={faArrowAltCircleLeft}
                          text="Back"
                          handleClick={() => {
                            back();
                          }}
                        />
                        <S.StyledButton
                          type="submit"
                          icon={faBucket}
                          text="submit"
                        />
                      </S.ButtonsWrapper>
                    </>
                  );
              }
            })()}
          </S.Form>
        </S.Container>
      </>
    );
  };

  const display = () => {
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
          <S.Form>
            <S.ProgressBar style={{ width: `calc(50% * ${data.page + 1}` }} />
            <S.ProgressLeft
              style={{ width: `calc(100% - (50% * ${data.page + 1}))` }}
            />
            {error && <Notification>{error}</Notification>}
            <S.Title>Register</S.Title>
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
    <Container>
      <S.FormContainer>{displayTable()}</S.FormContainer>
    </Container>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default RegisterForm;
