import { Platform } from 'react-native'
import Color from './colors'

const defaultStyles = {
    text: {
        color: Color.darkGray,
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    },
    Color
}
export default defaultStyles