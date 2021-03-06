import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup'

import { Form, FormFeed, SubmitButon } from '../components/Forms';
import Screen from '../components/Screen';

const validationShema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).label('Password'),
})


function LoginScreen(props) {

    return (
        <Screen>
            <Image style={styles.logo} source={require('./../assets/icon.png')} />

            <Form
                initialValues={{ email: '', password: '' }}
                validationSchema={validationShema}
                onSubmit={values => console.log(values)}
            >
                <FormFeed
                    icon='email'
                    name="email"
                    placeholder='Email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                />
                <FormFeed
                    icon='lock'
                    name="password"
                    placeholder='Password'
                    textContentType='password'
                    secureTextEntry
                />
                <SubmitButon title='Login' />
            </Form>
        </Screen >
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 90,
    },
})

export default LoginScreen;