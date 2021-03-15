import React from 'react';
import { useFormikContext } from 'formik';
import { View } from 'react-native';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage'

function AppFormPicker({ items, CatogoryItem, width, placeholder, icon, name }) {
    const { touched, values, setFieldTouched, handleChange, errors } = useFormikContext()

    return (
        <View>
            <AppPicker
                items={items}
                selectedItem={values[name]}
                onItemSelect={(id) => handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                placeholder={placeholder}
                icon={icon}
                width={width}
                CatogoryItem={CatogoryItem}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

export default AppFormPicker;