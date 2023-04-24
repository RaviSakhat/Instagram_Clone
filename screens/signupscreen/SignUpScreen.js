import {View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {SignUpScreenStyle} from './SignUpScreenStyle';
import SignUpForm from '../../components/signup/SignUpForm';


const SignUpScreen = () => {
  return (
    <View style={SignUpScreenStyle.container}>
      <View style={SignUpScreenStyle.logoContainer}>
        <Image
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png',
          }}
          style={{height: 100, width: 100}}
        />
      </View>
      <SignUpForm />
    </View>
  );
};

export default SignUpScreen;
