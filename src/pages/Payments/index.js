import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Gap, HeaderPayment} from '../../components';

const Payments = ({navigation}) => {
  return (
    <View>
      <Header
        title="Pembayaran"
        onBack={() => {}}
        onPress={() => navigation.navigate('MainApp')}
      />

      <HeaderPayment
        title="Pilih Jenis Pembayaran"
        subTitle="Terdapat beberapa macam pembayaran silahkan pilih sesuai kebutuh anda"
      />
      <Text>Payments</Text>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({});
