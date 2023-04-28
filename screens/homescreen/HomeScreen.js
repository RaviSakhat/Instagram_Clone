import {SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HomeScreenStyle} from './HomeScreenStyle';
import Header from '../../components/home/Header';
import Stories from '../../components/stories/Stories';
import Posts from '../../components/posts/Posts';
// import {Posts} from '../../data/PostsData';
import BottomTabs from '../../components/bottomtab/BottomTabs';
import {bottomTabIcons} from '../../assests/BottomTabIcons';
import {db} from '../../FireBase';

const HomeScreen = () => {
  const [PostData, setPostData] = useState([]);

  useEffect(() => {
    db.collectionGroup('posts').
    orderBy('createdAt', 'desc').
    onSnapshot(snapShot => {
      setPostData(snapShot.docs.map(post => ({id: post.id, ...post.data()})));
    });
  }, []);

  return (
    <SafeAreaView style={HomeScreenStyle.container}>
      <Header />
      <Stories />
      <ScrollView>
        {PostData.map((post, index) => (
          <Posts post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

export default HomeScreen;
