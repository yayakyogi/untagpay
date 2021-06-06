import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const MenuButtonHomepage = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuButtonHomepage;

const styles = StyleSheet.create({
  container: {alignItems: 'center', width: 80},
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
  },
});
