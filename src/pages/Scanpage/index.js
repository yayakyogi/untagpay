import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ReactDevelopmet} from '../../assets';

const Scanpage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This page Scan QR is under development</Text>
      <Image source={ReactDevelopmet} style={{width: 250, height: 250}} />
    </View>
  );
};

export default Scanpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontFamily: 'Poppins-Medium', color: 'red', fontSize: 15},
});
