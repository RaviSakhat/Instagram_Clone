import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const SignUpScreenStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    
    logoContainer: {
        alignItems: 'center',
        marginTop: 16,
    }
});

export { SignUpScreenStyle }