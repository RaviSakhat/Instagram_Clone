import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {LoginFormStyle} from './LoginFormStyle';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '../../FireBase';

const LoginForm = () => {

  const navigation = useNavigation();

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(8, 'Your password having at least 8 character'),
  });

  const onLogin = async(email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("🚀 Firebase Logged Successfully...✅", email, password)
    } catch (error) {
        Alert.alert('પાસવર્ડ ખોટો')
        return;
    }
    navigation.navigate('HomeScreen')
  }

  return (
    <View style={LoginFormStyle.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => onLogin(values.email, values.password)}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({handleChange, handleSubmit, handleBlur, values, isValid}) => (
          <>
            <View style={[LoginFormStyle.inputField, {borderColor : values.email.length < 1 ||  Validator.validate(values.email) ? '#17C8FF' : 'red'}]}>
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
            <View style={[LoginFormStyle.inputField, {borderColor : 1 > values.password.length || values.password.length >= 8 ? '#17C8FF' : 'red'}]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                // keyboardType= 'phone-pad'
                textContentType= 'password'
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
                style={LoginFormStyle.linearGradient}>
                <TouchableOpacity
                  style={LoginFormStyle.buttonContainer}
                  onPress={handleSubmit}>
                  <Text style={LoginFormStyle.buttonText}>Log In</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <Text style={{color: 'white'}}>
                Don't have an account?
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                  <Text style={{color: 'white', fontWeight: 'bold', top: 5}}>
                    {' '}
                    Sign Up
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

export default LoginForm;
