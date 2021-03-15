import React from 'react';
import { Formik } from 'formik';

function Form({ children, ...rest }) {
    return (
        <Formik
            {...rest}
        >
            {() => (
                <>
                    {children}
                </>
            )}

        </Formik>
    );
}

export default Form;