import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { getReadableImgSrc } from "../api/utils.js";
import rootNavigation from "../navigation/rootNavigation.js";
import routes from "../navigation/routes.js";
import getDiffernce from "../utils/dateProcessor.js";
import Color from "./../config/colors.js";
import AppText from "./AppText.js";

function card({
  title,
  price,
  images,
  listingId,
  location,
  owner,
  description,
  date,
}) {
  let src = getReadableImgSrc(
    images[0].fullImg.imgBuffer.data,
    images[0].fullImg.contentType
  );

  const listingAge = getDiffernce(date);

  const navigate = () => {
    const parrams = {
      data: {
        title,
        price,
        imageUri: src,
        listingId,
        location,
        owner,
        description,
      },
    };

    rootNavigation.navigate(routes.LISTING_DETAILS_SCREEN, parrams);
  };

  return (
    <TouchableWithoutFeedback onPress={navigate} key={listingId}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: src }} />

        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{`₹${price}`}</AppText>
        </View>
        <View style={styles.timeBox}>
          <AppText style={styles.time}>{listingAge}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Color.white,
    margin: 15,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontFamily: "Font",
    color: Color.darkGray,
    padding: 10,
    paddingHorizontal: 20,
  },
  timeBox: {
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 25,
    right: 10,
  },
  time: {
    color: Color.grey,
    fontFamily: "Font",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    padding: 10,
    paddingTop: 0,
    paddingHorizontal: 20,
    color: Color.primary,
  },
});

export default card;
