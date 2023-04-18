import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const BottomTabStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    icon: {
        width: 30,
        height: 30
    }
});

export { BottomTabStyle };