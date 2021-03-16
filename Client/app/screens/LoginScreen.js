import React, { useContext } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import AuthContext from "../api/AuthContext";
import { login, authTokenKey } from "../api/auth";
import { Form, FormFeed, SubmitButon } from "../components/Forms";
import jwtDecode from "jwt-decode";
import Screen from "../components/Screen";
import authStorage from "../api/authStorage";
import * as SecureStorage from "expo-secure-store";

const validationShema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen(props) {
  const context = useContext(AuthContext);

  const handleLogin = async (loginDetails) => {
    const { storeToken } = authStorage;

    //Loging to server and storing user's token into device !
    const res = await login(loginDetails);
    if (!res.ok) console.log("error while logging in");

    await storeToken(authTokenKey, res.data);

    //getting the stored token in device and decoding it

    const userData = jwtDecode(res.data);
    console.log("Decoding token Sucess, storing it ", userData);

    //updating the usersData in app !
    context.setUser(userData);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("./../assets/icon.png")} />

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
        <SubmitButon title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 90,
  },
});

export default LoginScreen;
