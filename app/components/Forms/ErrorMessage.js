import React from 'react';
import { StyleSheet } from 'react-native';
import Apptext from '../AppText';

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null

    return <Apptext style={styles.error}>{error}</Apptext>
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})
export default ErrorMessage;