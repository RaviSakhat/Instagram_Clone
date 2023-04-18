import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Users} from '../../data/Users';
import {StoryStyle} from './StoryStyle';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <TouchableOpacity>
              <Image source={story.image} style={StoryStyle.story_img} />
            </TouchableOpacity>
            <Text style={StoryStyle.user_name}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
