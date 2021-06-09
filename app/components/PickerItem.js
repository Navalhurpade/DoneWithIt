import React from 'react';
import { TouchableOpacity } from 'react-native';
import Apptext from './AppText';

function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity
            style={{ alignItems: 'center', padding: 15 }}
            onPress={onPress}>
            <Apptext> {item.lable} </Apptext>
        </TouchableOpacity>
    );
}

export default PickerItem;