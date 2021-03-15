import React from 'react';
import { View, StyleSheet } from 'react-native';
import Color from '../../config/colors';

function ListItemSeperator(props) {
    return (
        <View style={styles.seperator} >
        </View>
    );
}

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: 5,
        backgroundColor: Color.lightGray
    }
})

export default ListItemSeperator;