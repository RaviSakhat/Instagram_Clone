import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Divider} from 'react-native-elements';
import {Image} from 'react-native';
import {PostFooterStyle, PostHeaderStyle} from './PostHeaderStyle';
import {firebase, db} from '../../FireBase';

const {height, width} = Dimensions.get('screen');

const Posts = ({post}) => {

  const handleLike = (post) => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    )
    db.collection('users').doc(post.owner_email).collection('posts').doc(post.id).update({
      likes_by_users : currentLikeStatus ? firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email) : firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email),
    }).then(() => {console.log('Liked Successfully....')}).catch(error => {
        console.error('Liked Error', error)
      })
  }

  return (
    <View style={{marginBottom: 10}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginTop: 12, marginHorizontal: 5}}>
        <FooterIcon post={post} handleLike={handleLike} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({post}) => (
  <View style={PostHeaderStyle.postHeader}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity>
        <Image
          source={{uri: post.profile_picture}}
          style={PostHeaderStyle.HeaderUserProfile}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={PostHeaderStyle.userText}>{post.username}</Text>
      </TouchableOpacity>
    </View>
    <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
  </View>
);

const PostImage = ({post}) => (
  <View style={{width: '100%', height: 350, flexDirection: 'row'}}>
    <Image
      source={{uri: post.imageUrl}}
      style={{flex: 1, aspectRatio: 1, width: '100%'}}
    />
  </View>
);

const FooterIcon = ({handleLike, post}) => (
  <View style={{flexDirection: 'row'}}>
    {/* <View style={PostFooterStyle.leftFooterIconContainer}> */}
    <SafeAreaView style={PostFooterStyle.leftFooterIconContainer}>
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={PostFooterStyle.footerIconStyle}
          source={{
            uri: post.likes_by_users.includes(firebase.auth().currentUser.email) ? "https://img.icons8.com/emoji/48/null/heart-suit.png" :
            'https://img.icons8.com/ios/50/FFFFFF/like--v1.png'
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={PostFooterStyle.footerIconStyle}
          source={{
            uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FFFFFF/external-chat-instagram-flatart-icons-outline-flatarticons.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={PostFooterStyle.footerIconStyle}
          source={{
            uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FFFFFF/external-send-email-flatart-icons-outline-flatarticons.png',
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
    {/* </View> */}
    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
      <TouchableOpacity onPress={() => console.log('first')}>
        <Image
          style={PostFooterStyle.footerIconStyle}
          source={{
            uri: 'https://img.icons8.com/external-phatplus-lineal-phatplus/64/FFFFFF/external-bookmarks-essential-phatplus-lineal-phatplus.png',
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({post}) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: 'white', fontWeight: '600'}}>
      {post.likes_by_users.length.toLocaleString('en')} likes
    </Text>
  </View>
);

const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{color: 'white'}}>
      <Text style={{fontWeight: '600'}}>{post.username}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({post}) => (
  <View style={{marginTop: 5}}>
    {!!post.comments.length && (
      <Text style={{color: 'grey'}}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
);
const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <>
        <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{color: 'white'}}>
            <Text style={{fontWeight: '600'}}>{comment.user}</Text>{' '}
            {comment.comment}
          </Text>
        </View>
      </>
    ))}
  </>
);
export default Posts;
