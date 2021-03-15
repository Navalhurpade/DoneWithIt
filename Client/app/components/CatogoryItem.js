import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Apptext from './AppText'
import Icon from './Icon'

function CatogoryItem({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={item.icon} size={80} backgroundColor={item.backgroundColor} />
            <Apptext style={styles.lable} >{item.label}</Apptext>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingVertical: 5
    },
    lable: {
        marginVertical: 7,
        textAlign: 'center',
        width: 80
    }
})

export default CatogoryItem;