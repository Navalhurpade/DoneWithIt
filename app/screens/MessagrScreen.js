import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { ListItem, ListItemSeperator } from '../components/Lists';
import Screen from '../components/Screen';

const initialMessages = [
    {
        _id: 1,
        title: 'Yash Sharma',
        subTitle: 'Are, Available hai kya ye item ?',
        image: require('./../assets/mosh.jpg')
    },
    {
        _id: 2,
        title: 'Shubham Bodakhe',
        subTitle: '150 Rupeya denga !, usse jyadya nai, paisa ch to nai hai bro...',
        image: require('./../assets/mosh.jpg')
    },
    {
        _id: 3,
        title: 'T3',
        subTitle: 'M3',
        image: require('./../assets/mosh.jpg')
    }
]

function MessagrScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const onDelete = message => {
        const remainingMessages = messages.filter(m => m._id !== message._id)
        setMessages(remainingMessages)
    }

    return (
        <Screen >
            <FlatList
                data={messages}
                keyExtractor={massage => massage._id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.subTitle}
                        image={item.image}
                        isSwipeable={true}
                        onSelect={() => console.log("Selected ", item)}
                        onDelete={() => onDelete('Deleted', item)
                        }
                    />
                }
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => setMessages(initialMessages)}
            >
            </FlatList>
        </Screen>
    );
}

export default MessagrScreen;