import React,  { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { getListings } from './../api/listing'
import Card from '../components/card';
import Screen from '../components/Screen';

// const listings = [
//     {
//         _id: 1,
//         title: 'Red Jacket',
//         prize: 100,
//         image: require('../assets/jacket.jpg'),
//         owner: {
//             name: "Naval Hurpade",
//             noOfListings: 6,
//             img: require('./../assets/mosh.jpg'),
//         }
//     },
//     {
//         _id: 2,
//         title: 'Couch',
//         prize: 150,
//         image: require('../assets/couch.jpg'),
//         owner: {
//             name: "Yash Sharma",
//             noOfListings: 12,
//             img: require('./../assets/mosh.jpg'),
//         }
//     }
// ]

function HomeScreen({ navigation }) {

    const [ listings, setListings ] = useState([])
    const [ listin, setListi ] = useState("hellow")


    useEffect(()=> {
        getAllListings()
    },[])
    
    const getAllListings = async () => {
      const AllListings = await getListings()
        setListings(AllListings)
    }

    return (
        <Screen style={styles.container} >
            <FlatList
                data={listings}
                keyExtractor={item => item._id.toString()}
                renderItem={({ item }) => <Card
                    data={item}
                />}
            />
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