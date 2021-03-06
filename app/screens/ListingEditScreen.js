import React, { useState } from 'react';
import { StyleSheet } from 'react-native'

import * as Yup from 'yup'
import Screen from '../components/Screen';
import { Form, FormFeed, SubmitButon, FormPicker } from '../components/Forms';
import CatogoryItem from '../components/CatogoryItem';
import colors from './../config/colors'


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    prize: Yup.string().required().min(1).max(10000).label('Prize'),
    catagories: Yup.string().required().label('Catagories'),
    description: Yup.string().label('Description'),
})


function RegisterScreen(props) {
    const [catagory, setCategory] = useState('')

    const catagories = [{
        label: 'Furniture',
        icon: 'floor-lamp',
        backgroundColor: colors.red,
        value: 1
    },
    {
        label: 'Cars',
        icon: 'car',
        backgroundColor: colors.orange,
        value: 1
    },
    {
        label: 'Cameras',
        icon: 'camera',
        backgroundColor: colors.yellow,
        value: 1
    },
    {
        label: 'Games',
        icon: 'cards',
        backgroundColor: colors.green,
        value: 2
    },
    {
        label: 'Clothing',
        icon: 'show-heel',
        backgroundColor: colors.cyan,
        value: 3
    },
    {
        label: 'Sports',
        icon: 'basketball',
        backgroundColor: colors.brightBlue,
        value: 3
    },
    {
        label: 'Movies & Music',
        icon: 'headphones',
        backgroundColor: colors.softBlue,
        value: 3
    },
    {
        label: 'Books',
        icon: 'book-open-variant',
        backgroundColor: colors.purple,
        value: 2
    },
    {
        label: 'Other',
        icon: 'folder-outline',
        backgroundColor: colors.grey,
        value: 1
    }
    ]


    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ title: '', prize: '', catagories: '', description: '' }}
                validationSchema={validationSchema}
                onSubmit={value => console.log(value)}
            >
                <FormFeed
                    name="title"
                    placeholder="Title"
                    autoCapitalize='words'
                    autoCorrect
                />
                <FormFeed
                    name='prize'
                    width="35%"
                    placeholder='Prize'
                    keyboardType='number-pad'
                />
                <FormPicker
                    items={catagories}
                    name='catagories'
                    width="50%"
                    placeholder='Catagories'
                    CatogoryItem={CatogoryItem}
                />
                <FormFeed
                    name='description'
                    placeholder='Description'
                    numberOfLines={2}
                />
                <SubmitButon title='Register' backgroundColor='secondary' />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default RegisterScreen;