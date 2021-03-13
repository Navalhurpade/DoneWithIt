import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AppPicker from "./app/components/AppPicker";

import AppTextInput from './app/components/AppTextInput'
import Color from './app/config/colors'
import HomeScreen from "./app/screens/HomeScreen";
import ListDetailsScreen from "./app/screens/ListDetailsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagrScreen from "./app/screens/MessagrScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WellcomeScreen from "./app/screens/WellcomeScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";



export default function App() {

  return (
    < ListingEditScreen />
  );
}
