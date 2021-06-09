import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const stack = createStackNavigator();

const AccountNavigator = () => {
  const { ACCOUNT_SCREEN, MESSEGES_SCREEN } = routes;
  return (
    <stack.Navigator>
      <stack.Screen name={ACCOUNT_SCREEN} component={MyAccountScreen} />
      <stack.Screen name={MESSEGES_SCREEN} component={MessagesScreen} />
    </stack.Navigator>
  );
};

export default AccountNavigator;
