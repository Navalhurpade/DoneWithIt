import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";
import Color from "../config/colors";

function ProgressAnimationScreen({ uploadProgress, onAnimationFinish }) {
  return (
    <Modal style={styles.container}>
      <View style={styles.subContainer}>
        {uploadProgress < 1 ? (
          <Progress.Bar color={Color.primary} progress={uploadProgress} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onAnimationFinish}
            style={styles.animation}
            source={require("./../assets/animations/doneC.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 500,
    height: 500,
  },
});

export default ProgressAnimationScreen;
