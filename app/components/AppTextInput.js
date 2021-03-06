import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from './../config/styles'

function AppTextInput({ icon, width = "100%", placeholder, ...rest }) {

    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons color={defaultStyles.Color.medium}
                style={styles.icon}
                name={icon}
                size={25} />}
            <TextInput placeholder={placeholder} style={defaultStyles.text} {...rest} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: defaultStyles.Color.lightGray,
        alignItems: "center",
        flexDirection: 'row',
        borderRadius: 25,
    },
    icon: {
        paddingRight: 10,
    }
})

export default AppTextInput;