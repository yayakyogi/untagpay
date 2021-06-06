import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, MenuHistoryPage} from '../../components';
import {IcCalender, IcAddSaldo} from '../../assets';

const Historypage = () => {
  return (
    <View style={styles.container}>
      <Header title="Riwayat" />
      <View style={styles.listHistory}>
        <MenuHistoryPage
          icon={<IcCalender />}
          transaksi="Pembayaran Kuliah | UKT/SPP "
          nominal="Rp 500.000"
          date="1/06/2020"
        />
        <MenuHistoryPage
          icon={<IcAddSaldo />}
          transaksi="Tambah Saldo"
          nominal="Rp 1.000.000"
          date="25/05/2020"
        />
      </View>
    </View>
  );
};

export default Historypage;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
  listHistory: {paddingHorizontal: 15, paddingBottom: 20},
});
