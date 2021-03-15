import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'

import CatogoryItem from '../components/CatogoryItem';
import colors from './../config/colors'
import ImageFormFeed from '../components/Forms/ImageFormFeed';
import Screen from '../components/Screen';
import { Form, FormFeed, SubmitButon, FormPicker } from '../components/Forms';
import * as Yup from 'yup'
import useLocation from '../hooks/useLocation';
import { postListings } from '../api/listing';


const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please Select at Least one Image !"),
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.string().required().min(1).max(10000).label('Price'),
    catagories: Yup.string().required().label('Catagories'),
    description: Yup.string().label('Description'),
})


function ListingEditScreen(props) {
    const catagories = [{
        id: 1,
        label: 'Furniture',
        icon: 'floor-lamp',
        backgroundColor: colors.red,
        value: 1
    },
    {
        id: 2,
        label: 'Cars',
        icon: 'car',
        backgroundColor: colors.orange,
        value: 1
    },
    {
        id: 3,
        label: 'Cameras',
        icon: 'camera',
        backgroundColor: colors.yellow,
        value: 1
    },
    {
        id: 4,
        label: 'Games',
        icon: 'cards',
        backgroundColor: colors.green,
        value: 2
    },
    {
        id: 5,
        label: 'Clothing',
        // icon: 'cloths',
        backgroundColor: colors.cyan,
        value: 3
    },
    {
        id: 6,
        label: 'Sports',
        icon: 'basketball',
        backgroundColor: colors.brightBlue,
        value: 3
    },
    {
        id: 7,
        label: 'Movies & Music',
        icon: 'headphones',
        backgroundColor: colors.softBlue,
        value: 3
    },
    {
        id: 8,
        label: 'Books',
        icon: 'book-open-variant',
        backgroundColor: colors.purple,
        value: 2
    },
    {
        id: 9,
        label: 'Other',
        icon: 'folder-outline',
        backgroundColor: colors.grey,
        value: 1
    }
    ]
    const location = useLocation()

    const handlelisting = listingData => {
        // const listing = new Listing({
//     categoryId: data.categoryId,
//     userId: req.user.userId,
//     location: data.location
// });

        console.log(listingData);

        // const data = {
        //     ...listingData,
            
        // }
    }

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{ images: [], title: '', price: '', catagories: '', description: '' }}
                validationSchema={validationSchema}
                onSubmit={handlelisting}
            >
                <ImageFormFeed name='images' />

                <FormFeed
                    name="title"
                    placeholder="Title"
                    autoCapitalize='words'
                    autoCorrect
                />
                <FormFeed
                    name='price'
                    width="35%"
                    placeholder='Price'
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

export default ListingEditScreen;