import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native'

import Icon from '../components/Icon';
import ListItem from '../components/Lists/ListItem';
import ListItemSeperator from '../components/Lists/ListItemSeperator';
import Screen from '../components/Screen';
import Color from '../config/colors';

function MyAccountScreen(props) {

    const menuItems = [
        {
            id: 1,
            title: 'My Listings',
            icon: 'format-list-bulleted',
            backgroundColor: Color.secondary
        },
        {
            id: 2,
            title: 'My Account',
            icon: 'email',
            backgroundColor: Color.primary
        }
    ]


    return (
        <Screen style={styles.container}>

            <ListItem style={styles.profile} titleStyle={styles.titleStyle} title='Naval' subTitle='NavalHurpade.ml' image={require('../assets/mosh.jpg')} />
            <View style={styles.menuSection}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon} backgroundColor={item.backgroundColor} />}
                        />
                    } />
            </View>
            <ListItem
                style={{ backgroundColor: Color.white }}
                title='Log Out'
                backgroundColor={Color.white}
                IconComponent={<Icon name='logout' backgroundColor={Color.yellow} />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.lightGray
    },
    profile: {
        backgroundColor: Color.white,
        marginTop: 30,
        marginBottom: 40,
    }, titleStyle: {
        fontWeight: '700'
    },
    menuSection: {
        backgroundColor: Color.white,
        borderRadius: 10,
        marginBottom: 40,
        marginHorizontal: 5
    },
})

export default MyAccountScreen;