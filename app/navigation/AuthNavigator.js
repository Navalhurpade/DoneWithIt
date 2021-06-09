import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import routes from "./routes";
import WellcomeScreen from "../screens/WellcomeScreen";
import Color from "../config/colors";

const AuthNavigation = () => {
  const stack = createStackNavigator();
  const { WELLCONE_SCREEN, LOGIN_SCREEN, REGISTER_SCREEN } = routes;
  return (
    <stack.Navigator screenOptions={{ headerTintColor: Color.primary }}>
      <stack.Screen
        options={{ headerShown: false }}
        name={WELLCONE_SCREEN}
        component={WellcomeScreen}
      />
      <stack.Screen
        options={{ headerShown: true }}
        name={LOGIN_SCREEN}
        component={LoginScreen}
      />
      <stack.Screen
        options={{ headerShown: true }}
        name={REGISTER_SCREEN}
        component={RegisterScreen}
      />
    </stack.Navigator>
  );
};

export default AuthNavigation;
