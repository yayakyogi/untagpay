import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcPlp, IcKkn} from '../../../assets';
import {Buttonbayar} from '../../atoms';

const PaymentKuliahLainnya = ({navigation, onPressPlp, onPressKkn}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleTag}>
        <Text style={styles.titleText}>Tagihan Lain-Lain</Text>
      </View>
      {/* PLP */}
      <View style={styles.menu}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IcPlp />
          <View style={styles.body}>
            <Text style={styles.titlePembayaran}>PLP / MAGANG</Text>
            <Text style={styles.virtualAccount}>
              Virtual Account (VA): 0000000000
            </Text>
            <Text style={styles.nominal}>Rp .-</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPressPlp} activeOpacity={0.7}>
          <Buttonbayar />
        </TouchableOpacity>
      </View>

      {/* KKN */}
      <View style={styles.menu}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IcKkn />
          <View style={styles.body}>
            <Text style={styles.titlePembayaran}>KKN</Text>
            <Text style={styles.virtualAccount}>
              Virtual Account (VA): 0000000000
            </Text>
            <Text style={styles.nominal}>Rp .-</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPressKkn} activeOpacity={0.7}>
          <Buttonbayar />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentKuliahLainnya;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingTop: 4,
    paddingLeft: 4,
    flex: 1,
  },
  titleTag: {
    borderColor: '#FF3838',
    borderWidth: 1,
    borderRadius: 5,
    width: 140,
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
    paddingBottom: 10,
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#AAA69D',
    flex: 1,
  },
  body: {marginLeft: 5},
  titlePembayaran: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#020202',
  },
  virtualAccount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#020202',
  },
  nominal: {fontFamily: 'Poppins-Medium', fontSize: 12, color: '#020202'},
  btn: {
    borderRadius: 5,
    backgroundColor: '#F30000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  text: {fontFamily: 'Poppins-Medium', fontSize: 12, color: '#ffffff'},
});
