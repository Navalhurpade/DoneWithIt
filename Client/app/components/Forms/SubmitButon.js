import { useFormikContext } from 'formik';
import React from 'react';

import AppButton from '../AppButton';

function SubmitButon({ title, backgroundColor }) {
    const { handleSubmit } = useFormikContext()
    return (
        <AppButton title={title} backgroundColor={backgroundColor} onPress={handleSubmit} />
    );
}

export default SubmitButon;