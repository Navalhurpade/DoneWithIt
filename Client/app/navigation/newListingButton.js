import React from 'react'
import { View, StyleSheet } from 'react-native';
import Color from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import routes from './routes';

function newListingButton({ }) {
    const navigation = useNavigation()
    const { LISTING_EDIT_SCREEN } = routes
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(LISTING_EDIT_SCREEN)}>
            <View >
                <MaterialCommunityIcons name='plus-circle' size={40} color={Color.white} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: Color.primary,
        borderColor: Color.white,
        borderWidth: 10,
        bottom: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default newListingButton;