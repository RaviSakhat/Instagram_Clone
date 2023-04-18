import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';
import {BottomTabStyle} from './BottomTabStyle';

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({icon}) => {
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{uri: icon.inactive}} style={BottomTabStyle.icon} />
    </TouchableOpacity>;
  };

  return (
    <View style={BottomTabStyle.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  );
};

export default BottomTabs;
