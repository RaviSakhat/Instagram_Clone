import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import {Image} from 'react-native';
import {PostFooterStyle, PostHeaderStyle} from './PostHeaderStyle';

const {height, width} = Dimensions.get('screen');

const Posts = ({post}) => {
  return (
    <View style={{marginBottom: 10}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginTop: 12, marginHorizontal: 5}}>
        <FooterIcon />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post}/>
      </View>
    </View>
  );
};

const PostHeader = ({post}) => (
  <View style={PostHeaderStyle.postHeader}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity>
        <Image
          source={post.profilepic}
          style={PostHeaderStyle.HeaderUserProfile}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={PostHeaderStyle.userText}>{post.user}</Text>
      </TouchableOpacity>
    </View>
    <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
  </View>
);

const PostImage = ({post}) => (
  <View style={{width: '100%', height: 350, flexDirection: 'row'}}>
    <Image
      source={post.imageUrl}
      style={{flex: 1, aspectRatio: 1, width: '100%'}}
    />
  </View>
);

const FooterIcon = () => (
  <View style={{flexDirection: 'row'}}>
    <View style={PostFooterStyle.leftFooterIconContainer}>
      <TouchableOpacity>
        <Image
          style={PostFooterStyle.footerIconStyle}
          source={{
            uri: 'https://img.icons8.com/ios/50/FFFFFF/like--v1.png',
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
    </View>
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
    <Text style={{color: 'white', fontWeight: '600'}}>{post.likes} likes</Text>
  </View>
);

const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{color: 'white'}}>
      <Text style={{fontWeight: '600'}}>{post.user}</Text>
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
