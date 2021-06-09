import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ImageCard({ uri, onDelete }) {
    if (!uri) return null
    return (
        <TouchableOpacity onPress={onDelete}>
            <View style={styles.container}  >
                <Image style={styles.Image} source={{ uri: uri }} />
            </View >
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        overflow: 'hidden'
    },
    Image: {
        height: 100,
        width: 100,
        borderRadius: 15,
    }
})

export default ImageCard;