import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {Users} from '../../data/Users';
import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('screen');

const UserProflePost = () => {
  let squares = [];
  let numberOfSquares = Users.length;

  for (let index = 0; index < numberOfSquares; index++) {
    squares.push(
      <View key={index}>
        {Users.map((post, index) => (
          <Image
            key={index}
            source={post.image}
            style={{
              width: width/3,
              height: 124,
              marginVertical: 0.5,
              backgroundColor: 'white',
            }}
          />
        ))}
      </View>,
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{width: '100%', height: '100%'}}>
      <View
        style={{
          backgroundColor: 'black',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {squares}
      </View>
    </ScrollView>
  );
};

export default UserProflePost;
