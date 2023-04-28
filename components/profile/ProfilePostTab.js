import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabIcon from 'react-native-vector-icons/Ionicons'
import UserProflePost from './UserProflePost';
import UserTagPost from './UserTagPost';
import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const ProfilePost = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarShowLabel: false,
      tabBarStyle: {backgroundColor: 'black'},
      tabBarIndicatorStyle: {
        backgroundColor: 'white',
        height: 2,
      },
      tabBarIcon: 
      ({focused, colour}) => {
        let iconName;
        if(route.name === 'UserProflePost'){
          iconName = focused ? 'grid-outline' : 'grid-outline'
          colour = focused ? 'white' : 'grey'
        }else if(route.name === 'UserTagPost'){
          iconName = focused ? 'person-add-outline' : 'person-add-outline'
          colour = focused ? 'white' : 'grey'
        }
        return <TabIcon name={iconName} color={colour} size={20}/>;
      }
    })}
  >
    <Tab.Screen name='UserProflePost' component={UserProflePost}/>
    <Tab.Screen name='UserTagPost' component={UserTagPost}/>
  </Tab.Navigator>
  );
};

export default ProfilePost;

