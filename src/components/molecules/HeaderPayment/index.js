import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderPayment = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default HeaderPayment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingLeft: 21,
    paddingTop: 28,
    paddingRight: 27,
    paddingBottom: 14,
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  subTitle: {
    color: '#020202',
    opacity: 0.5,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  line: {height: 5, width: '100%', backgroundColor: '#F3F3F3'},
});
