import React from "react";
import { View, StyleSheet } from "react-native";
import Color from "../config/colors";
import Text from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfllineNotice({}) {
  const netInfo = useNetInfo();
  if (
    netInfo.isConnected !== "unknown" &&
    netInfo.isInternetReachable === false
  )
    return (
      <View style={styles.container}>
        <Text style={styles.notice}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    top: Constants.statusBarHeight,
    width: "100%",
    justifyContent: "center",
    elevation: 1,
  },
  notice: {
    color: Color.white,
    alignSelf: "center",
  },
});

export default OfllineNotice;
