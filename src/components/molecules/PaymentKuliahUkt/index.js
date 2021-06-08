import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcUkt} from '../../../assets';
import {Buttonbayar} from '../../atoms';
import {Payments_Kuliah_Checkout} from '../../../pages';

const PaymentKuliahUkt = ({navigation, onPressUkt}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleTag}>
        <Text style={styles.titleText}>Tagihan Rutin Semester</Text>
      </View>
      <View style={styles.menu}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IcUkt />
          <View style={styles.body}>
            <Text style={styles.titlePembayaran}>UKT/SPP</Text>
            <Text style={styles.virtualAccount}>
              Virtual Account (VA): 000000000
            </Text>
            <Text style={styles.nominal}>Rp 3.000.000</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPressUkt} activeOpacity={0.7}>
          <Buttonbayar />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentKuliahUkt;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF3838',
    borderRadius: 5,
    paddingTop: 4,
    paddingLeft: 4,
    paddingBottom: 10,
  },
  titleTag: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: 170,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {fontFamily: 'Poppins-Medium', color: '#FF3838', fontSize: 12},
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 16,
    marginTop: 15,
  },
  body: {marginLeft: 5},
  titlePembayaran: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#ffffff',
  },
  virtualAccount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#ffffff',
  },
  nominal: {fontFamily: 'Poppins-Medium', fontSize: 12, color: '#ffffff'},
});
