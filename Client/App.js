import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./app/navigation/AppNavigator";
import MyTheme from './app/navigation/navaigationTheam'

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
