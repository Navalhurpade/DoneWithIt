import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from './../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem';
import Color from '../config/colors';

function AppPicker({
    CatogoryItem = PickerItem,
    selectedItem,
    width = "100%",
    items,
    onItemSelect,
    placeholder,
    icon }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons color={defaultStyles.Color.medium}
                        style={styles.icon}
                        name={icon}
                        size={25} />}
                    {selectedItem ? <AppText style={styles.text} >{selectedItem}</AppText> :
                        <AppText style={{ color: Color.medium, flex: 1 }} >{placeholder}</AppText>}
                    <MaterialCommunityIcons color={defaultStyles.Color.medium}
                        name='chevron-down'
                        size={25} />
                </View>
            </TouchableWithoutFeedback>
            <Modal style={styles.modleWindow} visible={modalVisible} animationType='slide'>
                <Screen style={{ alignItems: 'center' }}>
                    <Text style={styles.btn} onPress={() => setModalVisible(false)} >close</Text>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={3}
                        renderItem={({ item }) => <CatogoryItem
                            item={item}
                            onPress={() => {
                                onItemSelect(item.label)
                                setModalVisible(false)
                            }}
                        />}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: defaultStyles.Color.lightGray,
        alignItems: "center",
        flexDirection: 'row',
        borderRadius: 25,
    },
    btn: {
        alignItems: "center",
        color: '#0CAFFF',
        marginBottom: 10
    },
    text: {
        flex: 1,
    },
    modalWindow: {
        borderRadius: 15
    },
    icon: {
        paddingRight: 10,
    }
})

export default AppPicker;