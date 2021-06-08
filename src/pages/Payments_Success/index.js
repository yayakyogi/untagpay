import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcSuccess} from '../../assets';
import {Gap, ListDataTransaction, Button} from '../../components';

const Payments_Success = ({navigation, route}) => {
  const {judul} = route.params;
  const {nama} = route.params;
  const {jenis} = route.params;
  const {virtualAccount} = route.params;
  const {nominal} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <IcSuccess />
        <Gap height={20} />
        <Text style={styles.textSuccess}>Transaksi {judul} Berhasil</Text>
      </View>
      <View style={styles.menuAkun}>
        <Text style={styles.title}>Rincian</Text>
        <ListDataTransaction Key="Nama" Value={nama} />
        <ListDataTransaction
          Key="Virtucal Account (VA)"
          Value={virtualAccount}
        />
        <ListDataTransaction Key="Jenis Pembayaran" Value={jenis} />
        <ListDataTransaction Key="Nominal" Value={nominal} />
      </View>
      <View style={styles.btn}>
        <Button
          btnName="DASHBOARD"
          onPress={() => navigation.navigate('MainApp')}
        />
      </View>
    </View>
  );
};

export default Payments_Success;

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapper: {flex: 2, alignItems: 'center', justifyContent: 'center'},
  title: {fontFamily: 'Poppins-Mediuam', marginBottom: 20, fontSize: 25},
  textSuccess: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    width: 300,
    textAlign: 'center',
  },
  menuAkun: {flex: 1, justifyContent: 'flex-start', paddingHorizontal: 20},
  btn: {paddingBottom: 20, paddingHorizontal: 20},
});
