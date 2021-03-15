import React from 'react';
const { createStackNavigator } = require("@react-navigation/stack")
import HomeScreen from "./../screens/HomeScreen";
import ListDetailsScreen from "./../screens/ListDetailsScreen";
import routes from './routes';

const stack = createStackNavigator()

const FeedNavigator = () => {
    const { FEED_SCREEN, LISTING_DETAILS_SCREEN } = routes
    return (
        <stack.Navigator mode="modal">
            <stack.Screen name={FEED_SCREEN} component={HomeScreen} />
            <stack.Screen name={LISTING_DETAILS_SCREEN} component={ListDetailsScreen} />
        </stack.Navigator>
    )
}


export default FeedNavigator 