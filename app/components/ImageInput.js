import React, { useEffect } from 'react'
import { Alert, StyleSheet, View } from 'react-native';

import Color from '../config/colors'
import ImageCard from './ImageCard';
import * as ImagePicker from "expo-image-picker"
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ImageInput({ selectedImages, handleImageSelection, handleImageRemove }) {
    const GetCammeraRollPermissions = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted)
            alert("You Dont have the permission")
    }
    useEffect(() => {
        GetCammeraRollPermissions()
    }, [])

    const getImage = async () => {
        try {
            const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!cancelled)
                handleImageSelection(uri)

        } catch (error) {
            console.log("Feiled to Load Image", error);
        }
    }

    const conformRemoveImage = imageuri => {
        Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: "Yes", onPress: () => handleImageRemove(imageuri) },
            { text: "No", onPress: () => { } }])
    }

    return (
        <View style={styles.container} >
            {selectedImages && selectedImages.map(imageuri =>
                <ImageCard
                    key={imageuri}
                    onDelete={() => conformRemoveImage(imageuri)}
                    uri={imageuri} />)}
            {selectedImages.length < 3 && <View style={styles.iconContainer} >
                <MaterialCommunityIcons
                    name='camera'
                    color={Color.grey}
                    size={35}
                    onPress={getImage}
                />
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    },
    imagesContainer: {
        width: 240,
        flexDirection: 'row',
    },
    iconContainer: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.lightGray,
        marginLeft: 15,
        borderRadius: 15
    }
})

export default ImageInput;