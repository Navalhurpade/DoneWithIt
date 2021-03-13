import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import Card from '../components/card';
import Screen from '../components/Screen';

const listings = [
    {
        _id: 1,
        title: 'Red Jacket',
        prize: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        _id: 2,
        title: 'Couch',
        prize: 150,
        image: require('../assets/couch.jpg')
    }
]

function HomeScreen(props) {
    return (
        <Screen style={styles.container} >

            <FlatList
                data={listings}
                keyExtractor={item => item._id.toString()}
                renderItem={({ item }) => <Card
                    title={item.title}
                    subtitle={'$' + item.prize}
                    image={item.image} />}
            />

            {/* <Card title="jaket" subtitle="100$" image={require('./../assets/jacket.jpg')} />
            <Card title="Couch" subtitle="150$" image={require('./../assets/couch.jpg')} /> */}
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#f8f4f4',
        paddingTop: 70
    }
})

export default HomeScreen;