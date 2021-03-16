import React from "react";
import { Form, FormFeed, SubmitButon } from "../components/Forms";
import { registerUser } from "./../api/auth";

import * as Yup from "yup";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(15).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const RegisterScreen = ({ navigation }) => {
  const handleRegistration = async (userDetails) => {
    try {
      const res = await registerUser(userDetails);
      if (!res.ok) {
        if (res.data) {
          console.log(res.data.error);
        }
        return;
      }
      console.log("sucessfully registered user !");
    } catch (error) {
      console.log("unexpected error ", error);
    }
    navigation.navigate(routes.LOGIN_SCREEN);
  };

  return (
    <Screen style={{ paddingHorizontal: 15 }}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRegistration}
      >
        <FormFeed name="name" icon="account" placeholder="Name" />
        <FormFeed
          name="email"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormFeed
          name="password"
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButon title="Register" backgroundColor="secondary" />
      </Form>
    </Screen>
  );
};

export default RegisterScreen;
