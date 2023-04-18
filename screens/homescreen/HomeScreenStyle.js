import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("screen");

const HomeScreenStyle = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})

export { HomeScreenStyle }