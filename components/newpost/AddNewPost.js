import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AddNewPostStyle} from './AddNewPostStyle';
import FormikPostUploader from './FormikPostUploader';
import {useNavigation} from '@react-navigation/native';

const AddNewPost = () => {
  return (
    <View style={AddNewPostStyle.container}>
      <Header />
      <FormikPostUploader />
    </View>
  );
};

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={AddNewPostStyle.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          source={{
            uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-6.png',
          }}
          style={AddNewPostStyle.headerBackButton}
        />
      </TouchableOpacity>
      <Text style={AddNewPostStyle.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  );
};

export default AddNewPost;
