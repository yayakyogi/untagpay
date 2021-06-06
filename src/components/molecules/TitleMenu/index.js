import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TitleMenu = ({title, seeAll, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      {seeAll && (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <View style={styles.btnMenu}>
            <Text style={styles.btnText}>Lihat semua</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TitleMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {fontFamily: 'Poppins-Medium', color: '#E00120', fontSize: 17},
  btnMenu: {
    backgroundColor: '#E00120',
    borderRadius: 5,
    paddingHorizontal: 12,
    marginRight: 20,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
