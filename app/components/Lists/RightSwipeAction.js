import React from 'react';
import { StyleSheet, View } from 'react-native'

import Color from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function RightSwipeAction({ onDelete }) {
    return (
        <View style={styles.action} >
            <MaterialCommunityIcons name='trash-can' size={30} color={Color.white} onPress={onDelete} />
        </View>
    );
}

const styles = StyleSheet.create({
    action: {
        width: 70,
        backgroundColor: Color.danger,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RightSwipeAction;