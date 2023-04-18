import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeaderStyle} from './HeaderStyle';
import headerLogo from '../../assests/header-logo.png';

const Header = () => {
  return (
    <View style={HeaderStyle.container}>
      <TouchableOpacity>
        <Image source={headerLogo} style={HeaderStyle.logo} />
      </TouchableOpacity>
      <View style={HeaderStyle.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
            }}
            style={HeaderStyle.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
            }}
            style={HeaderStyle.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={HeaderStyle.unreadBadge}>
                <Text style={HeaderStyle.unreadBadgeText}>11</Text>
            </View>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
            }}
            style={HeaderStyle.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
