import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {IcWalletFloat, IcTransactionFloat, IcScanFloat} from '../../../assets';
import {Gap, Saldomenu, Buttonmenu} from '../../atoms';

const FloatingMenu = ({navigation}) => {
  return (
    <View style={styles.floatMenuContainer}>
      <Text style={styles.textWelcome}>Selamat Datang, Yayak</Text>
      <Gap height={10} />
      <View style={styles.menu}>
        <Saldomenu />
        <View style={styles.btnFloatMenu}>
          <Buttonmenu
            icon={<IcScanFloat />}
            label="Scand QR"
            onPress={({OnPress}) => navigation.navigate('Login')}
          />
          <Gap width={10} />
          <Buttonmenu icon={<IcTransactionFloat />} label="Transaksi" />
        </View>
      </View>
    </View>
  );
};

export default FloatingMenu;

const styles = StyleSheet.create({
  floatMenuContainer: {
    height: 110,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#D7CDCD',
  },
  textWelcome: {fontFamily: 'Poppins-Medium', fontSize: 14, color: '#E00120'},
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  btnFloatMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
