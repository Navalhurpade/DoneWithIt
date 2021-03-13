import React from 'react';
import { Form, FormFeed, SubmitButon } from '../components/Forms';

import * as Yup from 'yup'
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().max(15).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).label('Password'),
})


function RegisterScreen(props) {
    return (
        <Screen >
            <Form
                initialValue={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={value => console.log(value)}
            >
                <FormFeed
                    name="name"
                    icon='person'
                    placeholder="Name"
                />
                <FormFeed
                    name='email'
                    icon='email'
                    placeholder='Email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                />
                <FormFeed
                    name='password'
                    icon='lock'
                    placeholder='Password'
                    textContentType='password'
                    secureTextEntry />
                <SubmitButon title='Register' backgroundColor='secondary' />
            </Form>
        </Screen>
    );
}

export default RegisterScreen;