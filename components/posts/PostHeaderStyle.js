import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const PostHeaderStyle = StyleSheet.create({
    postHeader : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    },
    HeaderUserProfile: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: 'orange'
    },
    userText: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '700'
    }
});

const PostFooterStyle = StyleSheet.create({
    footerIconStyle : {
        width: 30, 
        height: 30,
        tintColor: 'white'
    },
    leftFooterIconContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '40%',
        marginTop: '13%',
    }
})

export { PostHeaderStyle, PostFooterStyle };