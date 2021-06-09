import React from "react";
import { View, StyleSheet, Image } from "react-native";

import male from "./../assets/male.png";
import female from "./../assets/female.png";
import Apptext from "./AppText";
import Color from "../config/colors";

function OwnerInfo({ owner }) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={owner.gender ? female : male} />
      <View style={styles.textContainer}>
        <Apptext style={styles.name}>{owner.name}</Apptext>
        <Apptext style={styles.subTitle}>{owner.listings} Listings</Apptext>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    paddingVertical: 13,
    paddingHorizontal: 20,
    alignItems: "center",
    // backgroundColor: "red",
    borderRadius: 15,
  },
  name: {
    fontSize: 19,
    fontWeight: "700",
    color: Color.darkGray,
  },
  subTitle: {
    color: Color.grey,
    marginTop: 4,
    fontFamily: "Font",
  },
  icon: {
    height: 53,
    width: 53,
  },
  textContainer: {
    marginLeft: 15,
  },
});

export default OwnerInfo;
