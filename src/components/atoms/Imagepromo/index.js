import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';

const Imagepromo = ({img}) => {
  return <Image source={img} style={styles.img} resizeMode={'cover'} />;
};

export default Imagepromo;

const styles = StyleSheet.create({
  img: {height: 140, width: 300, marginRight: 20, borderRadius: 10},
});
