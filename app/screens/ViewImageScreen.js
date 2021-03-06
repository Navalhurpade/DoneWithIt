import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Color from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.background_img} source={require('./../assets/couch.jpg')} />
            <MaterialCommunityIcons style={styles.btn_close} color='white' name="close" size={35} />
            <MaterialCommunityIcons style={styles.btn_delete} color='white' name="trash-can-outline" size={35} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    btn_close: {
        position: 'absolute',
        top: 30,
        left: 30,
    },
    btn_delete: {
        position: 'absolute',
        top: 30,
        right: 30,
    },
    background_img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        flex: 1
    }
})
export default ViewImageScreen;