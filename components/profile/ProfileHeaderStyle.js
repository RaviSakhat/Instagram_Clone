import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const ProfileHeaderStyle = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    width: '100%',
    height: '50%',
  },
  headerContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    // backgroundColor: 'green',
    marginStart: '2%',
    justifyContent: 'space-between'
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: 'orange',
    // marginTop: '1%',
  },
  secondHeaderContainer: {
    // backgroundColor: 'green',
  },
  userAccountText: {
    // backgroundColor: 'red',
    marginHorizontal: '5%',
    marginTop: '5%'
  }

});

const profileBodyStyle = StyleSheet.create({
  bodyContainer: {
    width: '100%',
    height: '30%',
    // backgroundColor: '#FFEEB3',
  }
})

export {ProfileHeaderStyle, profileBodyStyle};
