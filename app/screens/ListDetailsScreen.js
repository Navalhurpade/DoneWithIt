import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Apptext from '../components/AppText';
import Color from '../config/colors';
import ListItem from '../components/Lists/ListItem'

function ListDetailsScreen(props) {
    return (
        <View style={styles.container} >
            <Image style={styles.productImage} source={require('./../assets/jacket.jpg')} />
            <Apptext style={styles.productTitle} > Red jacket for sale </Apptext>
            <Apptext style={styles.productPrize} > $100 </Apptext>
            <ListItem title='Mosh hamadani'
                subTitle='5 Listings'
                image={require('./../assets/mosh.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    productImage: {
        width: '100%',
        height: 240
    },
    productPrize: {
        padding: 15,
        paddingTop: 0,
        color: Color.primary,
        fontWeight: 'bold',
    },
    productTitle: {
        padding: 15,
        color: Color.black,
        fontWeight: 'bold',
    },
    sellerContainer: {
        marginHorizontal: 10,
    },
    sellerInfo: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 40
    },
    sellerImage: {
        height: 60,
        width: 60,
        borderRadius: 35
    },
    sellerListings: {
        color: Color.medium,
        fontSize: 18
    },
    sellerName: {
        color: Color.black,
        fontSize: 20,
        fontWeight: 'bold',
    },

})

export default ListDetailsScreen;