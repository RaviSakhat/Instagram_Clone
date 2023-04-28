import {View} from 'react-native';
import React from 'react';
import {ProfileScreenStyle} from './ProfileScreenStyle';
import ProfileHeader from '../../components/profile/ProfileHeader';


const ProfileScreen = () => {
  return (
    <>
      <View style={ProfileScreenStyle.body}>
        <ProfileHeader />
      </View>
    </>
  );
};

export default ProfileScreen;
