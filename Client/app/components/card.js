import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import routes from '../navigation/routes.js';

import Color from './../config/colors.js'
import AppText from './AppText.js';

function card({ data }) {
    const navigation = useNavigation()
    const { title, prize, image } = data
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(routes.LISTING_DETAILS_SCREEN, { data })}>
            <View style={styles.card} >
                <Image style={styles.image} source={image} />
                <AppText style={styles.title} >{title}</AppText>
                <AppText style={styles.subtitle} >{`$${prize}`}</AppText>
            </View>
        </TouchableWithoutFeedback>

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