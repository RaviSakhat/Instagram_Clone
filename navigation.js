import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/homescreen/HomeScreen';
import NewPostScreen from './screens/newpost/NewPostScreen';
import SignUpScreen from './screens/signupscreen/SignUpScreen';
import LogInScreen from './screens/loginscreen/LogInScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => 
   (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


export const SignedOutStack = () => 
   (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogInScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

