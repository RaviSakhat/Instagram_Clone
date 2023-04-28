import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {ProfileHeaderStyle, profileBodyStyle} from './ProfileHeaderStyle';
import {Image} from 'react-native';
import Stories from '../stories/Stories';
import ProfilePostTab from './ProfilePostTab';
import BottomTabs from '../../components/bottomtab/BottomTabs';
import {bottomTabIcons} from '../../assests/BottomTabIcons';
import BottomSheetIcon from 'react-native-vector-icons/Ionicons';
import ReanimatedBottomsheet from 'react-native-reanimated-bottomsheet';
import {Divider} from 'react-native-elements';

const {height, width} = Dimensions.get('screen');
console.log('height, width', height, width);

const ProfileHeader = () => {
  const bottomSheetRef = useRef(null);
  const bottomSheetRef2 = useRef(null);

  const handleBottomSheetClose = key => {
    if (key === 1) {
      setCloseBottomSheet(!closeBottomSheet);
      bottomSheetRef.current.snapTo(closeBottomSheet ? 2 : 0);
    } else if (key === 2) {
      console.log('closeBottomSheet2', closeBottomSheet2);
      setCloseBottomSheet2(!closeBottomSheet2);
      bottomSheetRef2.current.snapTo(closeBottomSheet2 ? 2 : 0);
    } else {
      setCloseBottomSheet(closeBottomSheet);
    }
  };

  const [listOfBottomSheet, setListOfBottomSheet] = useState(false);
  const [closeBottomSheet, setCloseBottomSheet] = useState(false);
  const [closeBottomSheet2, setCloseBottomSheet2] = useState(false);
  const [bottomSheetList, setBottomSheetList] = useState([
    {
      title: 'Settings',
      icon: () => (
        <BottomSheetIcon name="settings-outline" size={25} color="black" />
      ),
    },
    {
      title: 'Your activity',
      icon: () => (
        <BottomSheetIcon name="accessibility-outline" size={25} color="black" />
      ),
    },
    {
      title: 'Archive',
      icon: () => (
        <BottomSheetIcon name="archive-outline" size={25} color="black" />
      ),
    },
    {
      title: 'QR Code',
      icon: () => (
        <BottomSheetIcon name="qr-code-outline" size={25} color="black" />
      ),
    },
    {
      title: 'Saved',
      icon: () => (
        <BottomSheetIcon name="bookmark-outline" size={25} color="black" />
      ),
    },
    {
      title: 'Close friends',
      icon: () => (
        <BottomSheetIcon name="list-outline" size={25} color="black" />
      ),
    },
    {
      title: 'Favourites',
      icon: () => (
        <BottomSheetIcon name="star-outline" size={25} color="black" />
      ),
    },
  ]);

  const [secondBottomSheetList, setSecondBottomSheetList] = useState([
    {
      title: 'Reel',
      icon: 'https://img.icons8.com/ios/50/000000/instagram-reel.png',
    },
    {
      title: 'Post',
      icon: 'https://img.icons8.com/small/16/000000/grid.png',
    },
    {
      title: 'Story',
      icon: 'https://img.icons8.com/pulsar-line/48/000000/add.png',
    },
    {
      title: 'Story Highlight',
      icon: 'https://img.icons8.com/pastel-glyph/64/000000/like--v2.png',
    },
    {
      title: 'Live',
      icon: 'https://img.icons8.com/fluency-systems-filled/48/000000/rfid-signal.png',
    },
    {
      title: 'Guide',
      icon: 'https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-guide-travel-wanicon-lineal-wanicon.png',
    },
  ]);

  return (
    <>
      <View style={ProfileHeaderStyle.container}>
        <View style={ProfileHeaderStyle.headerContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={{
                uri: 'https://img.icons8.com/material-outlined/24/000000/lock--v1.png',
              }}
              style={{
                width: '10%',
                height: '50%',
                tintColor: 'white',
                marginTop: '5%',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                marginStart: 7,
              }}>
              Ravi Sakhat
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginRight: '3%'}}>
            <TouchableOpacity
              onPress={() => {
                handleBottomSheetClose(2);
              }}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
                }}
                style={{width: 30, height: 30, marginHorizontal: 20}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleBottomSheetClose(1);
              }}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/material-outlined/24/null/menu--v1.png',
                }}
                style={{width: 30, height: 30, tintColor: 'white'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <ScrollView> */}
        <View>
          <View style={ProfileHeaderStyle.secondHeaderContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image
                  source={{
                    uri: 'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
                  }}
                  style={ProfileHeaderStyle.profileImage}
                />
              </View>
              <View style={ProfileHeaderStyle.userAccountText}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'white'}}>2</Text>
                  <Text style={{color: 'white'}}>Posts</Text>
                </View>
              </View>
              <View style={ProfileHeaderStyle.userAccountText}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'white'}}>2</Text>
                  <Text style={{color: 'white'}}>Follow..</Text>
                </View>
              </View>
              <View style={ProfileHeaderStyle.userAccountText}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'white'}}>2</Text>
                  <Text style={{color: 'white'}}>Follo..</Text>
                </View>
              </View>
            </View>
            <Text style={{color: 'white', marginStart: '2%'}}>Ravi Sakhat</Text>
            <Text style={{color: 'white'}}> Namaste India 🙏🏻🙏🏻🙏🏻</Text>
          </View>
          <View style={profileBodyStyle.bodyContainer}>
            <View
              style={{
                // backgroundColor: 'red',
                height: '45%',
                width: '100%',
                marginTop: '4%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  backgroundColor: 'grey',
                  width: width / 2.5,
                  height: '100%',
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginHorizontal: 8,
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 15}}>
                  Edit Profile
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'grey',
                  width: width / 2.5,
                  height: '100%',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 15}}>
                  Share Profile
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'grey',
                  height: '100%',
                  width: '8%',
                  justifyContent: 'center',
                  marginRight: '3%',
                  borderRadius: 5,
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/external-those-icons-lineal-those-icons/24/null/external-Add-users-those-icons-lineal-those-icons.png',
                  }}
                  style={{
                    height: '65%',
                    width: '65%',
                    tintColor: 'white',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: '2.5%',
                alignItems: 'flex-start',
                // backgroundColor: 'red',
                marginBottom: 3,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Story Highlights
              </Text>
              <Text style={{color: 'white'}}>
                Keep your favorites stories on your profile
              </Text>
            </View>
            <View style={{height: '128.8%', paddingTop: '0.55%'}}>
              <Stories />
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
      <ProfilePostTab />
      <BottomTabs icons={bottomTabIcons} />
      <ReanimatedBottomsheet
        enabledGestureInteraction={true}
        hasFixedHeight={true}
        ref={bottomSheetRef}
        snapPoints={[0, 30, 350, height - 20]}
        renderHeader={() => {
          return (
            <View
              style={{
                alignItems: 'center',
                backgroundColor: 'grey',
                paddingVertical: 15,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <View
                style={{
                  height: 4,
                  width: 10,
                  backgroundColor: 'white',
                  paddingHorizontal: 20,
                  borderRadius: 6,
                }}></View>
            </View>
          );
        }}
        renderContent={() => {
          return (
            <>
              <View style={{backgroundColor: 'grey'}}>
                {bottomSheetList.map((item, index) => (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        marginVertical: 12,
                        marginTop: 3,
                        // backgroundColor: 'green'
                      }}
                      key={index}>
                      <View key={index}>{item.icon()}</View>
                      <View
                      // style={{backgroundColor: 'red'}}
                      >
                        <Text
                          style={{
                            color: 'white',
                            marginTop: 6,
                            marginHorizontal: 15,
                            fontSize: 20,
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </>
                ))}
              </View>
            </>
          );
        }}
      />
      <ReanimatedBottomsheet
        enabledGestureInteraction={true}
        hasFixedHeight={true}
        ref={bottomSheetRef2}
        snapPoints={[0, 30, 350, height - 20]}
        renderHeader={() => {
          return (
            <>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: 'grey',
                  paddingVertical: 15,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                <View
                  style={{
                    height: 4,
                    width: 10,
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    borderRadius: 6,
                  }}></View>
                <Text style={{color: 'black', fontSize: 25, top: 5}}>
                  Create
                </Text>
              </View>
              <Divider width={1} color="black" />
            </>
          );
        }}
        renderContent={() => {
          return (
            <>
              <View style={{backgroundColor: 'grey'}}>
                {secondBottomSheetList.map((item, index) => (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        marginVertical: 12,
                        marginTop: 7,
                        // backgroundColor: 'green'
                      }}
                      key={index}>
                      <Image
                        source={{uri: item.icon}}
                        style={{height: 30, width: 30}}
                      />
                      <View
                      // style={{backgroundColor: 'red'}}
                      >
                        <Text
                          style={{
                            color: 'white',
                            marginTop: 6,
                            marginHorizontal: 15,
                            fontSize: 20,
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </>
                ))}
              </View>
            </>
          );
        }}
      />
    </>
  );
};

export default ProfileHeader;
