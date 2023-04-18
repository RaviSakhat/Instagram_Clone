import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {HomeScreenStyle} from './HomeScreenStyle';
import Header from '../../components/home/Header';
import Stories from '../../components/stories/Stories';
import Posts from '../../components/posts/Posts';
import {PostsData} from '../../data/PostsData';
import BottomTabs from '../../components/bottomtab/BottomTabs';
import { bottomTabIcons } from '../../assests/BottomTabIcons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={HomeScreenStyle.container}>
      <Header />
      <Stories />
      <ScrollView>
        {PostsData.map((post, index) => (
          <Posts post = {post} key={index}/>
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
