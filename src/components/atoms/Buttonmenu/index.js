import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Gap from '../Gap';

const Buttonmenu = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.btn}>
        <Gap height={5} />
        {icon}
        <Text style={styles.btnText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Buttonmenu;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#E00120',
    borderRadius: 5,
    height: 60,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 8,
    color: '#ffffff',
    marginTop: 2,
  },
});
