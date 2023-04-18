import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const AddNewPostStyle = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    headerBackButton: {
        height: 30,
        width: 30,
        tintColor: 'white'
    },
     headerText: {
        color: 'white',
        fontWeight: 700,
        fontSize: 20,
        marginRight: 25
     }
});

export { AddNewPostStyle };