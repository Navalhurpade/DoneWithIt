import React from 'react'
import { View } from 'react-native';

import { useFormikContext } from 'formik';
import ImageInput from '../ImageInput';
import ErrorMessage from './ErrorMessage'

function ImageFormFeed({ name }) {
    const { errors, touched,
        values,
        setFieldValue } = useFormikContext()

    const removeImage = (imageuri) => {
        const remainingImages = values[name].filter(i => {
            return i !== imageuri
        })

        setFieldValue(name, remainingImages)
    }

    const handleAddImage = (uri) => {
        setFieldValue(name, [...values[name], uri])
    }


    return (
        <>
            <View >
                <ImageInput
                    handleImageSelection={handleAddImage}
                    selectedImages={values[name]}
                    handleImageRemove={removeImage}
                />
            </View>
            <ErrorMessage
                error={errors[name]}
                visible={touched[name]}
            />
        </>
    );
}

export default ImageFormFeed;