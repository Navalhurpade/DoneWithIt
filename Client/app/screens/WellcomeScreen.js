import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function WellcomeScreen({ navigation }) {
  const { LOGIN_SCREEN, REGISTER_SCREEN } = routes
    return (
        <ImageBackground
            style={styles.background_img}
            blurRadius={1}
            source={require("./../assets/background-img.png")} >

            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("./../assets/icon.png")} />
                <Text style={styles.tagLine} >Sell what you done with </Text>
            </View>
            <View style={styles.btn_container} >
                <AppButton title="Login" onPress={() => navigation.navigate(LOGIN_SCREEN)} backgroundColor='secondary' />
                <AppButton title="Register" onPress={() => navigation.navigate(REGISTER_SCREEN)} />
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background_img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btn_container: {
        width: '100%',
        padding: 20,
    },
    logo_container: {
        position: 'absolute',
        top: '9%',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100,
    },
    tagLine: {
        fontSize: 23,
        fontWeight: '700'
    }
})


export default WellcomeScreen;