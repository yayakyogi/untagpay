import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Or = () => {
  return (
    <View style={styles.gap}>
      <View style={styles.line} />
      <Text style={styles.or}>Atau</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Or;

const styles = StyleSheet.create({
  gap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {height: 1, width: 122, backgroundColor: '#c03928'},
  or: {color: '#c03928', marginHorizontal: 10, fontFamily: 'Poppins-Medium'},
});
