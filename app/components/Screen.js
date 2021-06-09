import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.Screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  Screen: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
