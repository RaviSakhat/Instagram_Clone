import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('screen');

const LoginFormStyle = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  buttonContainer: {
    width: 200,
    alignItems: 'center',
  },
  inputField: {
    borderRadius: 4,
    borderColor: '#17C8FF',
    borderWidth: 0.5,
    padding: '3%',
    // backgroundColor :'#FAFAFA',
    marginBottom: 10,
  },
  linearGradient: {
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    width: 198
  },
});

export {LoginFormStyle};
