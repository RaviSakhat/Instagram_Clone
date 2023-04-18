import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const StoryStyle = StyleSheet.create({
    story_img:{
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: 'orange'
    },
    user_name: {
        color: 'white'
    }
})

export { StoryStyle };