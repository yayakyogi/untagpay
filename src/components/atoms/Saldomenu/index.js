import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcWalletFloat} from '../../../assets';
import Gap from '../Gap';

const Saldomenu = () => {
  return (
    <View style={styles.saldoMenu}>
      <IcWalletFloat />
      <Gap width={10} />
      <View>
        <Text style={styles.titleSaldo}>Saldo kamu</Text>
        <Text style={styles.nominalSaldo}>Rp 10.000.000</Text>
      </View>
      <Gap width={27} />
    </View>
  );
};

export default Saldomenu;

const styles = StyleSheet.create({
  saldoMenu: {
    backgroundColor: '#E00120',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    paddingHorizontal: 10,
  },
  titleSaldo: {fontFamily: 'Poppins-Medium', fontSize: 14, color: '#ffffff'},
  nominalSaldo: {fontFamily: 'Poppins-Regular', fontSize: 12, color: '#ffffff'},
});
