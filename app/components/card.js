import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Color from './../config/colors.js'
import AppText from './AppText.js';

function card({ title, subtitle, image }) {
    return (
        <View style={styles.card} >
            <Image style={styles.image} source={image} />
            <AppText style={styles.title} >{title}</AppText>
            <AppText style={styles.subtitle} >{subtitle}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: Color.white,
        margin: 15,
        overflow: 'hidden'
    },
    image: {
        height: 200,
        width: '100%',
    },
    title: {
        fontSize: 22,
        color: Color.black,
        padding: 10,
        paddingHorizontal: 20
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
        padding: 10,
        paddingTop: 0,
        paddingHorizontal: 20,
        color: Color.primary
    }
})

export default card;