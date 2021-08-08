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
  FormInputTextArea,
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
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInputTextArea
                type="text"
                name="message"
                htmlFor="for"
                required
              />
              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormCotent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
