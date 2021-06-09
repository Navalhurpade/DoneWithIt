import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import * as authApi from "../api/auth/authApi";
import { ErrorMessage, Form, FormFeed, SubmitButon } from "../components/Forms";
import Screen from "../components/Screen";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Apptext from "../components/AppText";

const validationShema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen(props) {
  const { storeUser } = useAuth();
  const [loginFaild, setLoginFaild] = useState(false);

  const handleLogin = async (loginDetails) => {
    //posting login data to server, and getting the Token
    const {
      ok,
      data: authToken,
      problem,
      status,
    } = await authApi.login(loginDetails);

    if (!ok) {
      setLoginFaild(true);
      console.log(problem, status);
      return;
    }

    setLoginFaild(false);

    storeUser(authToken);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logo}
          source={require("./../assets/logo-red.png")}
        />
        <Apptext style={styles.logoText}>Done With It</Apptext>
      </View>

      <Form
        initialValues={{ email: "", password: "" }}
        validationSchema={validationShema}
        onSubmit={handleLogin}
      >
        <FormFeed
          icon="email"
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormFeed
          icon="lock"
          name="password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <ErrorMessage
          error={"Invalid Email or Password !"}
          visible={loginFaild}
        />
        <SubmitButon title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
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

export default LoginScreen;
