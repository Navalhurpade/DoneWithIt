import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";
import { Video, AVPlaybackStatus } from "expo-av";

import * as Progress from "react-native-progress";
import Color from "../config/colors";

function ProgressAnimationScreen({ uploadProgress, onAnimationFinish }) {
  const video = React.useRef(null);
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
            source={require("./../assets/animations/done.json")}
          />
          // <Video
          //   ref={video}
          //   style={styles.animation}
          //   source={require("./../assets/animations/done.mp4")}
          //   onError={(e) => console.log(e)}
          //   shouldPlay={true}
          //   isLooping
          //   resizeMode="cover"
          //   onPlaybackStatusUpdate={(states) => console.log(states)}
          // />
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
    flex: 1,
    width: 500,
    height: 500,
  },
});

export default ProgressAnimationScreen;
