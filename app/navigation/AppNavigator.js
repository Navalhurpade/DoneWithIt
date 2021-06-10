import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./newListingButton";
import routes from "./routes";
import useNotification from "./../hooks/useNotification";
import rootNavigation from "./rootNavigation";
// import { useNavigation } from "@react-navigation/core";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  const [option, setOption] = useState();
  const navigation = rootNavigation;
  // const navigation = useNavigation();
  const { FEED_SCREEN, LISTING_EDIT_SCREEN, ACCOUNT_SCREEN } = routes;
  useNotification();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          paddingBottom: 10,
          justifyContent: "center",
        },
        keyboardHidesTabBar: true,
      }}
      initialRouteName={FEED_SCREEN}
      style={styles.navigation}
    >
      <Tab.Screen
        options={{
          //Determine which Listing to load on startup,
          //if true loads OWN LISTINGS ONLY
          params: { self: false },

          tabBarIcon: ({ size, color }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.FEED_SCREEN);
              }}
              style={{
                flex: 1,
                height: 150,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="home"
                size={size + 3}
                color={color}
              />
            </TouchableOpacity>
          ),
        }}
        name={FEED_SCREEN}
        component={FeedNavigator}
      />
      <Tab.Screen
        options={{
          tabBarButton: () => <NewListingButton />,
        }}
        name={LISTING_EDIT_SCREEN}
        component={ListingEditScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.ACCOUNT_SCREEN)}
              style={{
                flex: 1,
                height: 150,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="account"
                size={size + 3}
                color={color}
              />
            </TouchableOpacity>
          ),
        }}
        name={ACCOUNT_SCREEN}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigation: {
    paddingBottom: 200,
  },
});

export default AppNavigator;
