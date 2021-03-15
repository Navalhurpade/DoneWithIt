import React from 'react';
import { View, StyleSheet, Image } from 'react-native';


import Apptext from '../components/AppText';
import Color from '../config/colors';
import ListItem from '../components/Lists/ListItem'
import { useRoute } from '@react-navigation/native';

function ListDetailsScreen(props) {
    const { params } = useRoute()
    const { title, prize, image, owner } = params.data
    return (
        <View style={styles.container} >
            <Image style={styles.productImage} source={image} />
            <Apptext style={styles.productTitle} > {title} </Apptext>
            <Apptext style={styles.productPrize} > {prize} </Apptext>
            <ListItem title={owner.name}
                subTitle={`${owner.noOfListings} Listings`}
                image={owner.img} />
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