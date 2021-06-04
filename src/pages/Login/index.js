import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Untagpay} from '../../assets';
import {TextInput, Button, Gap} from '../../components';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgLogo}>
        <Untagpay />
      </View>
      <Gap height={64} />
      <Text style={styles.title}>LOGIN</Text>
      <Gap height={21} />
      <TextInput
        label="ID"
        placeholder="Masukkan NIM / Kode Dosen / Email anda"
      />
      <Gap height={16} />
      <TextInput label="Password" placeholder="Masukkan password anda" />
      <Text style={styles.forgotpass}>Lupa password?</Text>
      <Gap height={30} />
      <Button btnName="LOGIN" />
      <View style={styles.gap}>
        <View style={styles.line} />
        <Text style={styles.or}>Atau</Text>
        <View style={styles.line} />
      </View>
      <Button btnName="DAFTAR" color="#ffffff" textColor="#E00120" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 35,
    backgroundColor: '#ffffff',
  },
  imgLogo: {alignItems: 'center'},
  title: {fontSize: 25, fontFamily: 'Poppins-Medium', color: '#C0392B'},
  gap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {height: 1, width: 122, backgroundColor: '#c03928'},
  or: {color: '#c03928', marginHorizontal: 10, fontFamily: 'Poppins-Medium'},
  forgotpass: {textAlign: 'right', color: '#8D92A3', marginTop: 6},
});
