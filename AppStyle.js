import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("screen");

const AppStyle = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export { AppStyle }