import {View} from 'react-native';
import React from 'react';
import {LoginScreenStyle} from './LoginScreenStyle';
import {Image} from 'react-native';
import LoginForm from '../../components/loginform/LoginForm';

const LogInScreen = () => {
  return (
    <View style={LoginScreenStyle.container}>
      <View style={LoginScreenStyle.logoContainer}>
        <Image
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png',
          }}
          style={{height: 100, width: 100}}
        />
      </View>
      <LoginForm />
    </View>
  );
};

export default LogInScreen;
