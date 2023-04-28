import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';
import {BottomTabStyle} from './BottomTabStyle';
import {useNavigation} from '@react-navigation/native';

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('');

  const Icon = ({icon}) => {
    const navigation = useNavigation();

    const handleTabPress = () => {
      if (icon.name === 'Profile') {
        navigation.navigate('ProfileScreen');
        // setActiveTab("Profile")
      } else if (icon.name === 'Home') {
        // setActiveTab("Home")
        navigation.navigate('HomeScreen');
      } else {
        setActiveTab(icon.name);
      }
    };

    return (
      <TouchableOpacity onPress={() => handleTabPress(icon.name)}>
        <Image
          source={{uri: activeTab === icon.name ? icon.active : icon.inactive}}
          style={[
            BottomTabStyle.icon,
            icon.name === 'Profile' ? BottomTabStyle.profilePicture() : null,
            activeTab === 'Profile' && icon.name === activeTab
              ? BottomTabStyle.profilePicture(activeTab)
              : null,
          ]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Divider width={1} orientation="vertical" />
      <View style={BottomTabStyle.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;
