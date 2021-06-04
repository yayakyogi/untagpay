import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        placeholder={placeholder}
        style={styles.textinput}></TextInputRN>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 15, fontFamily: 'Poppins-Regular'},
  textinput: {
    paddingHorizontal: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    marginTop: 6,
  },
});
