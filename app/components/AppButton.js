import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import colors from '../config/colors';

function AppButton({ title, onPress, backgroundColor = 'primary' }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { backgroundColor: colors[backgroundColor] }]} onPress={onPress} >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        alignItems: 'center',
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})



export default AppButton;