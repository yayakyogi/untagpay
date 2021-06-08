import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  Header,
  Gap,
  HeaderPayment,
  PaymentKuliahUkt,
  PaymentKuliahLainnya,
  TextInput,
} from '../../components';

const Payments_Kuliah = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Pembayaran Kuliah"
        onPress={() => navigation.navigate('MainApp')}
      />

      <View style={{backgroundColor: '#ffffff'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderPayment
            title="Pilih Jenis Pembayaran"
            subTitle="Terdapat beberapa macam pembayaran silahkan pilih sesuai kebutuh anda"
          />
          <View style={styles.line} />
          <View style={styles.body}>
            <PaymentKuliahUkt
              onPressUkt={() =>
                navigation.navigate('Payments_Checkout', {
                  judul: 'Pembayaran UKT / SPP',
                  nama: 'Ginantaka',
                  jenis: 'UKT / SPP',
                  virtualAccount: '000000000',
                })
              }
            />
            <Gap height={35} />
            <PaymentKuliahLainnya
              onPressPlp={() =>
                navigation.navigate('Payments_Checkout', {
                  judul: 'Pembayaran PLP / MAGANG',
                  nama: 'Ginantaka',
                  jenis: 'PLP / MAGANG',
                  virtualAccount: '111111111',
                })
              }
              onPressKkn={() =>
                navigation.navigate('Payments_Checkout', {
                  judul: 'Pembayaran KKN',
                  nama: 'Ginantaka',
                  jenis: 'KKN',
                  virtualAccount: '222222222',
                })
              }
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Payments_Kuliah;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
  body: {
    backgroundColor: '#ffffff',
    flex: 3,
    paddingTop: 18,
    paddingHorizontal: 22,
  },
  line: {height: 10, backgroundColor: '#F3F3F3'},
});
