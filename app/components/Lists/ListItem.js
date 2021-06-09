import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import male from "./../../assets/male.png";
import female from "./../../assets/female.png";
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
  gender,
  isSwipeable = false,
}) {
  const TouchableComponent = () => {
    return (
      <TouchableWithoutFeedback
        style={[styles.container, style]}
        onPress={onSelect}
      >
        <View style={styles.subContainer}>
          {IconComponent ? IconComponent : <ProfileImg gender={gender} />}
          <View style={styles.textContainer}>
            <Apptext numberOfLines={1} style={[styles.title, titleStyle]}>
              {title}
            </Apptext>
            {subTitle && (
              <Apptext numberOfLines={1} style={styles.subTitle}>
                {subTitle}
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
      </TouchableWithoutFeedback>
    );
  };

  const ProfileImg = ({ gender }) => {
    return <Image style={styles.image} source={gender ? female : male} />;
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
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  subContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    elevation: 4,
    borderRadius: 10,
    marginVertical: 5,
  },
  chevron: {
    alignSelf: "center",
  },
  image: {
    height: 62,
    width: 62,
    borderRadius: 35,
  },
  textContainer: {
    marginHorizontal: 15,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "#272628",
    fontSize: 20,
    fontWeight: "700",
  },
  subTitle: {
    color: Color.medium,
    fontFamily: "Roboto",
    fontSize: 18,
  },
});

export default ListItem;
