import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';
import {BottomTabStyle} from './BottomTabStyle';

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({icon}) => {
    return (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} style={[BottomTabStyle.icon, icon.name === 'Profile' ? BottomTabStyle.profilePicture() : null, activeTab === 'Profile' && icon.name === activeTab ? BottomTabStyle.profilePicture(activeTab) : null]} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Divider width={1} orientation='vertical'/>
      <View style={BottomTabStyle.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;
