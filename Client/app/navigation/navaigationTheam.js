import { DefaultTheme } from '@react-navigation/native'
import Color from '../config/colors'

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Color.primary,
        background: Color.white
    }
}