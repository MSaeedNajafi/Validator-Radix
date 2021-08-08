import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormCotent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  FormInput,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ArcticStake</Icon>
          <FormCotent>
            <Form action="#">
              <FormH1>Contact Us</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forget Password</Text>
            </Form>
          </FormCotent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
