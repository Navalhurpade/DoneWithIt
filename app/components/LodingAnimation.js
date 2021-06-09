import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Text } from "react-native";
import Color from "../config/colors";

function LodingAnimation({ visible }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      {/* <View style={styles.subOverlay}> */}
      <LottieView
        style={{ zIndex: 2 }}
        autoPlay
        source={require("./../assets/animations/loding.json")}
        loop
      />
      <Text style={styles.text}>loading...</Text>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "white",
    opacity: 0.7,
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: Color.mediumGray,
    fontSize: 21,
    top: 100,
  },
});

export default LodingAnimation;
