import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {user} from '../../../assets';

const MenuMessage = ({imgMsg, title, messages, time, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.itemMessage}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image source={imgMsg} style={styles.imgChat} />
      <View style={styles.messagesBody}>
        <Text style={styles.pengirim}>{title}</Text>
        <Text style={styles.isipesan}>{messages}</Text>
      </View>
      <Text style={styles.jam}>{time}</Text>
    </TouchableOpacity>
  );
};

export default MenuMessage;

const styles = StyleSheet.create({
  itemMessage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: '#f1f2f6',
  },
  imgChat: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  pengirim: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  messagesBody: {
    flex: 1,
  },
  isipesan: {
    fontWeight: '100',
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    marginTop: 5,
  },
  jam: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
