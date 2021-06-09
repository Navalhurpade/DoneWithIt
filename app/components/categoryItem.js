import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Color from "../config/colors";

function categoryItem({ cName, cId, selectedCategory, onSelect }) {
  const className =
    cId === selectedCategory ? styles.selectedItem : styles.notSelected;

  return (
    <TouchableOpacity onPress={() => onSelect(cId)}>
      <View style={[styles.categoryItem, className]}>
        <Text
          style={
            cId === selectedCategory
              ? { color: Color.white }
              : { color: Color.black }
          }
        >
          {cName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 4,
    minWidth: 60,
    alignItems: "center",
  },
  notSelected: {
    backgroundColor: Color.white,
  },
  selectedItem: {
    backgroundColor: Color.secondary,
  },
});

export default categoryItem;
