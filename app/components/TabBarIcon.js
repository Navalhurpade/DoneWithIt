import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import routes from "../navigation/routes";

function TabBarIcon({ icon, size, route }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        size={size}
        name={icon}
        onPress={() => navigation.navigate(route)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TabBarIcon;
