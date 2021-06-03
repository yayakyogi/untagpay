import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#E00120',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="#E00120" />
      <Image source={Logo} style={{height: 200, width: 200}} />
      <View style={{height: 30}} />
      <Text
        style={{fontSize: 14, color: '#ffffff', fontFamily: 'Poppins-Medium'}}>
        An Empowering & Networking University
      </Text>
    </View>
  );
};

export default SplashScreen;
