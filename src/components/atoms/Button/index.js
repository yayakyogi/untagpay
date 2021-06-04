import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({btnName, color = '#C0392B', textColor = '#ffffff'}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{btnName}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E00120',
  }),
  text: textColor => ({
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: textColor,
    textAlign: 'center',
    fontWeight: 'bold',
  }),
});
