import React, { useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  View,
} from "react-native";
import { ErrorMessage, Form, FormFeed, SubmitButon } from "../components/Forms";
import * as authApi from "../api/auth/authApi";

import * as Yup from "yup";
import useAuth from "../hooks/useAuth";
import LodingAnimation from "../components/LodingAnimation";
import Apptext from "../components/AppText";
import FormGenderSelector from "../components/Forms/FormGenderSelector";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(15).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
  gender: Yup.number().required(),
});

const RegisterScreen = ({ navigation }) => {
  const [registretionFaild, setRegistretionFaild] = useState(false);
  const [registerLoding, setRegisterLoading] = useState(false);
  const [error, setError] = useState("");
  const userManeger = useAuth();

  const handleRegistration = async (userDetails) => {
    try {
      setRegisterLoading(true);
      const { ok, data, status, problem } = await authApi.registerUser(
        userDetails
      );
      setRegisterLoading(false);

      if (!ok) {
        console.log("HAS ERROR", problem, status, data);
        setRegistretionFaild(true);
        return setError(data ? data.error : "Unexpected Error Occured !");
      }

      setRegistretionFaild(false);

      delete userDetails.name, delete userDetails.gender;

      //login user to get the token !
      setRegisterLoading(true);
      const {
        data: token,
        ok: loginOk,
        status: loginStatus,
        problem: logProblem,
      } = await authApi.login(userDetails);
      setRegisterLoading(false);

      if (!loginOk) {
        console.log(loginStatus, logProblem, token);
        setError(
          "Error Occured durring login Please go back and try login again !"
        );
        return setRegistretionFaild(true);
      }

      setRegistretionFaild(false);

      //store user data to device and update user state in root
      userManeger.storeUser(token.toString());
    } catch (e) {
      console.log("unexpected error ", e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <LodingAnimation visible={registerLoding} />

      <View style={styles.logoBox}>
        <Image
          style={styles.logo}
          source={require("./../assets/logo-red.png")}
        />
        <Apptext style={styles.logoText}>Done With It</Apptext>
      </View>
      <Form
        initialValues={{ name: "", email: "", password: "", gender: "" }}
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

        <FormGenderSelector name="gender" />

        <ErrorMessage visible={registretionFaild} error={error} />
        <SubmitButon
          style={styles.submitButton}
          title="Register"
          backgroundColor="secondary"
        />
      </Form>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  logoBox: {
    flex: -1,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
  },
  logoText: {
    marginTop: 10,
    marginBottom: 40,
    fontWeight: "700",
    fontSize: 30,
    fontFamily: "Roboto",
    color: "#E91D29",
  },
});

export default RegisterScreen;
