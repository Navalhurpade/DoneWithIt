import React from "react";
const {
  createStackNavigator,
  TransitionPresets,
} = require("@react-navigation/stack");
import HomeScreen from "./../screens/HomeScreen";
import ListDetailsScreen from "./../screens/ListDetailsScreen";
import routes from "./routes";
const { FEED_SCREEN, LISTING_DETAILS_SCREEN } = routes;

const stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <stack.Navigator mode="modal">
      <stack.Screen
        options={{ headerShown: false }}
        name={FEED_SCREEN}
        component={HomeScreen}
      />
      <stack.Screen
        options={{
          gestureEnabled: true,
          headerShown: false,

          //Adding readymade configurations and overiding some values
          ...TransitionPresets.ModalSlideFromBottomIOS,

          gestureVelocityImpact: 0.9,
          gestureResponseDistance: {
            vertical: 600,
          },
          gestureDirection: "vertical",
        }}
        name={LISTING_DETAILS_SCREEN}
        component={ListDetailsScreen}
      />
    </stack.Navigator>
  );
};

export default FeedNavigator;
