import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const BottomTabStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 30,
        height: 30
    },
    profilePicture: (activeTab = '') => ({
       borderRadius: 50,
       borderColor: 'white',
       borderWidth: activeTab === 'Profile' ? 2 : 0,
    }),
});

export { BottomTabStyle };