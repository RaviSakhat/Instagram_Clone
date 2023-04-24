import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import {SignUpFormStyle} from './SignUpFormStyle';
import {useNavigation} from '@react-navigation/native';
import {firebase, db} from '../../FireBase';

const SignUpForm = () => {
  const navigation = useNavigation();

  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().required().min(2, 'Username is required'),
    password: Yup.string()
      .required()
      .min(8, 'Your password having at least 8 character'),
  });

  const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const onSignUp = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      Alert.alert('User created Successfully...');
      console.log('Firebase user created Successfully');
      db.collection('users').doc(authUser.user.email).set({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomProfilePicture(),
      })
    } catch (error) {
        Alert.alert('🚀 ', error.message);
    }
    // navigation.navigate('LogInScreen');
  };

  return (
    <View style={SignUpFormStyle.wrapper}>
      <Formik
        initialValues={{email: '', password: '', username: ''}}
        onSubmit={values => onSignUp(values.email, values.password, values.username)}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}>
        {({handleChange, handleSubmit, handleBlur, values, isValid}) => (
          <>
            <View
              style={[
                SignUpFormStyle.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 2
                      ? '#17C8FF'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="name-phone-pad"
                textContentType="password"
                autoFocus={true}
                style={{color: 'white', left: 5}}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>
            <View
              style={[
                SignUpFormStyle.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#17C8FF'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username Or Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                style={{color: 'white', left: 5}}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View
              style={[
                SignUpFormStyle.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? '#17C8FF'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                // keyboardType="email-address"
                textContentType="password"
                autoFocus={true}
                style={{color: 'white', left: 5}}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: 'white'}}>Forgot Password? </Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 50}}>
              <LinearGradient
                colors={[
                  '#00FFFF',
                  '#17C8FF',
                  '#329BFF',
                  '#4C64FF',
                  '#6536FF',
                  '#8000FF',
                ]}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 1.0}}
                style={SignUpFormStyle.linearGradient}>
                <TouchableOpacity
                  style={SignUpFormStyle.buttonContainer}
                  onPress={handleSubmit}>
                  <Text style={SignUpFormStyle.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <Text style={{color: 'white'}}>
                Already have an account?
                <TouchableOpacity
                  onPress={() => navigation.navigate('LogInScreen')}>
                  <Text style={{color: 'white', fontWeight: 'bold', top: 3}}>
                    {' '}
                    Log In
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;
