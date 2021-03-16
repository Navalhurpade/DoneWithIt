import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RightSwipeAction from "./RightSwipeAction";
import Apptext from "../AppText";
import Color from "../../config/colors";

function ListItem({
  title,
  icon = "",
  subTitle,
  image,
  IconComponent,
  style,
  titleStyle,
  onSelect,
  onDelete,
  isSwipeable = false,
}) {
  const TouchableComponent = () => {
    return (
      <TouchableHighlight onPress={onSelect} underlayColor={Color.lightGray}>
        <View style={[styles.container, style]}>
          {IconComponent ? (
            IconComponent
          ) : (
            <Image source={{ uri: image }} style={styles.image} />
          )}
          <View style={styles.textContainer}>
            <Apptext numberOfLines={1} style={[styles.title, titleStyle]}>
              {" "}
              {title}{" "}
            </Apptext>
            {subTitle && (
              <Apptext numberOfLines={1} style={styles.subTitle}>
                {" "}
                {subTitle}{" "}
              </Apptext>
            )}
          </View>
          <MaterialCommunityIcons
            style={styles.chevron}
            name={"chevron-right"}
            color={Color.medium}
            size={25}
          />
        </View>
      </TouchableHighlight>
    );
  };

  const SwipeableComponent = () => {
    return (
      <Swipeable
        renderRightActions={() => <RightSwipeAction onDelete={onDelete} />}
      >
        <TouchableComponent />
      </Swipeable>
    );
  };

  return isSwipeable ? <SwipeableComponent /> : <TouchableComponent />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  chevron: {
    alignSelf: "center",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 35,
  },
  textContainer: {
    marginHorizontal: 10,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "#272628",
    fontSize: 19,
    fontWeight: "700",
  },
  subTitle: {
    color: Color.medium,
    fontSize: 18,
  },
});

export default ListItem;
