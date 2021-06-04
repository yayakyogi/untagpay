import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Register"
        onPress={() => navigation.navigate('Login')}
        onBack={() => {}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bodyContainer}>
          <Select />
          <Gap height={15} />
          <TextInput
            label="ID"
            placeholder="Masukkan NIM/Kode Dosen/Kode Karyawan"
          />
          <Gap height={15} />
          <TextInput label="Program Studi" placeholder="Masukkan Prodi Anda" />
          <Gap height={15} />
          <TextInput label="Email" placeholder="Masukkan Email Anda" />
          <Gap height={15} />
          <TextInput label="Password" placeholder="Masukkan Password Anda" />
          <Gap height={15} />
          <TextInput
            label="Konfirmasi Password"
            placeholder="Ulangi Passord Anda"
          />
          <Gap height={40} />
          <Button btnName="DAFTAR" />
          <Gap height={20} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
  bodyContainer: {marginTop: 40, paddingHorizontal: 25},
});
