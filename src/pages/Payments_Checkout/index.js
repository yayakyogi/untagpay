import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {Header, Gap, HeaderPayment, TextInput, Button} from '../../components';

const Payments_Checkout = ({navigation, route}) => {
  const {judul} = route.params;
  const {nama} = route.params;
  const {jenis} = route.params;
  const {virtualAccount} = route.params;

  const [nominal, setNominal] = useState('');

  const onPayment = () => {
    if (nominal) {
      navigation.replace('Payments_Autentication', {
        judul: judul,
        nama: nama,
        jenis: jenis,
        virtualAccount: virtualAccount,
        nominal: nominal,
      });
      setNominal('');
    } else {
      Alert.alert('Harap masukkan jumlah / nominal pembayaran');
      setNominal('');
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Periksa"
        onBack={() => {}}
        onPress={() => navigation.navigate('Payments_Kuliah')}
      />
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderPayment
            title={judul}
            subTitle="Pastikan data dibawah ini sudah sesuai dengan data yang anda miliki"
          />
          <View style={styles.line}></View>
          <View style={styles.body}>
            <Text style={styles.title}>DATA MAHASISWA</Text>
            <Gap height={10} />
            <TextInput
              label="Nama"
              placeholder="Masukkan nama anda"
              value={nama}
              editable={false}
            />
            <Gap height={15} />
            <TextInput
              label="Virtual Account"
              placeholder="Nomor virtual account anda"
              value={virtualAccount}
              editable={false}
            />
            <Gap height={15} />
            <TextInput
              label="Jenis Pembayaran"
              placeholder="Jenis Pembayaran"
              value={jenis}
              editable={false}
            />
            <Gap height={15} />
            <TextInput
              label="Nominal"
              placeholder="Masukkan nominal pembayaran"
              value={nominal}
              onChangeText={value => setNominal(value)}
              keyboardType="number-pad"
            />
            <Gap height={30} />
            <Button btnName="BAYAR" onPress={() => onPayment()} />
            <Gap height={15} />
            <Button
              btnName="BATAL"
              color="#ffffff"
              textColor="#E00120"
              onPress={() => navigation.navigate('Payments_Kuliah')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Payments_Checkout;

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingTop: 0,
    paddingHorizontal: 22,
    paddingBottom: 10,
  },
  title: {fontFamily: 'Poppins-Medium', fontSize: 18},
  line: {height: 10, backgroundColor: '#F3F3F3'},
});
