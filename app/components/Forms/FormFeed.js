import { useFormikContext } from 'formik';
import React from 'react';

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

function FormFeed({ name, width, autoCapitalize = 'none', autoCorrect = false, ...otherProp }) {

    const { handleChange, touched, setFieldTouched, errors } = useFormikContext()

    return (
        <>
            <AppTextInput
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProp}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormFeed;