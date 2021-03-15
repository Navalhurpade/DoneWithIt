import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


function Icon({ size = 50, backgroundColor, color = 'white', name }) {

    return (
        <View style={{
            height: size,
            width: size,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            backgroundColor: backgroundColor,
            borderRadius: size * 0.5
        }}>
            <MaterialCommunityIcons name={name} color={color} size={size * 0.5} />
        </View>
    );
}

export default Icon;