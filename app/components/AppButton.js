import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  style,
  backgroundColor = "primary",
  small = false,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: colors[backgroundColor] },
          small ? { padding: 10 } : { padding: 15 },
          style,
        ]}
        onPress={onPress}
      >
        <Text
          style={[styles.text, small ? { fontSize: 16 } : { fontSize: 20 }]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    alignItems: "center",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
