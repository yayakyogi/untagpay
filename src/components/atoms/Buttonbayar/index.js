import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Buttonbayar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bayar</Text>
    </View>
  );
};

export default Buttonbayar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#F30000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  text: {fontFamily: 'Poppins-Medium', fontSize: 12, color: '#ffffff'},
});
