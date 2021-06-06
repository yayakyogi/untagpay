import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcBack, BrandHeader} from '../../../assets';

const Header = ({title, onPress, onBack}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        {onBack && (
          <TouchableOpacity onPress={onPress}>
            <View style={styles.btnBack}>
              <IcBack />
            </View>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.containerLogo}>
        <BrandHeader />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: '#E00120',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    padding: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-Medium',
  },
  title: {fontSize: 20, color: '#ffffff'},
  btnBack: {paddingVertical: 20, paddingRight: 20, marginTop: 3},
});
