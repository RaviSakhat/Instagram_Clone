import {View, Text, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Image} from 'react-native';
import {Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '../../FireBase';
import {db} from '../../FireBase';

const placeHolder_Img =
  'https://img.icons8.com/pastel-glyph/64/FFFFFF/upload--v2.png';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('Url is required'),
  caption: Yup.string().max(2200, 'Caption has reached character limits.'),
});

const FormikPostUploader = () => {
  const navigation = useNavigation();

  const [thumbnail, setThumbnail] = useState(placeHolder_Img);
  const [currentLogInUser, setCurrentLogInUser] = useState(null);

  const getUserName = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .limit(1)
      .onSnapshot(snapshot =>
        snapshot.docs.map(doc => {
          setCurrentLogInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        }),
      );
    return unsubscribe;
  };

  useEffect(() => {
    getUserName();
  }, []);

  const uploadPostToFireBase = (caption, imageUrl) => {
    const unsubscribe = db.collection('users').doc(firebase.auth().currentUser.email).collection('posts').add({
      imageUrl: imageUrl,
      username: currentLogInUser.username,
      profile_picture: currentLogInUser.profilePicture,
      owner_uid: firebase.auth().currentUser.uid,
      owner_email: firebase.auth().currentUser.email,
      caption: caption,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      likes_by_users: [],
      comments: [],
    })
    .then(() => navigation.navigate("HomeScreen"))
    return unsubscribe
  }

  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => {
        uploadPostToFireBase(values.caption, values.imageUrl)
        console.log('Your post Uploaded Successfully');
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{uri: thumbnail ? thumbnail : placeHolder_Img}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                borderColor: 'grey',
                borderWidth: 1,
              }}
            />
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                placeholder="Write a Caption..."
                placeholderTextColor="white"
                multiline={true}
                style={{color: 'white', fontSize: 15}}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnail(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 15}}
            placeholder="Enter Image Url"
            placeholderTextColor="white"
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{color: 'red', fontSize: 12}}>{errors.imageUrl}</Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
