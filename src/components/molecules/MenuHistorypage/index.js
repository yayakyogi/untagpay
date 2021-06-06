import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {user} from '../../../assets';

const MenuHistoryPage = ({icon, transaksi, nominal, date, onPress}) => {
  return (
    <View style={styles.itemHistory} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.icons}>{icon}</View>
      <View style={styles.historyBody}>
        <Text style={styles.transaksi}>{transaksi}</Text>
        <Text style={styles.nominal}>{nominal}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default MenuHistoryPage;

const styles = StyleSheet.create({
  itemHistory: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    marginTop: 10,
  },
  icons: {
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
    overflow: 'hidden',
  },
  transaksi: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  historyBody: {
    flex: 1,
  },
  nominal: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    marginTop: 2,
  },
  date: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 10,
    fontFamily: 'Poppins-Light',
  },
});
