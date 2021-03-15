import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import FeedNavigator from "./FeedNavigator"
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from './AccountNavigator';
import NewListingButton from './newListingButton'
import routes from './routes';

const AppNavigator = () => {

    const Tab = createBottomTabNavigator()

    const { FEED_SCREEN, LISTING_EDIT_SCREEN, ACCOUNT_SCREEN } = routes

    return (
        <Tab.Navigator initialRouteName={LISTING_EDIT_SCREEN} style={{}} >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
                }}
                name={FEED_SCREEN} component={FeedNavigator} />
            <Tab.Screen
                options={{
                    tabBarButton: () => <NewListingButton />,
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='plus-circle' size={size} color={color} />
                }}
                name={LISTING_EDIT_SCREEN} component={ListingEditScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color} />
                }}
                name={ACCOUNT_SCREEN} component={AccountNavigator} />
        </Tab.Navigator>
    )
}


export default AppNavigator