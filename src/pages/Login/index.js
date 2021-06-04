import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Untagpay} from '../../assets';
import {TextInput, Button, Gap, Or} from '../../components';

const Login = ({navigation}) => {
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
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotpass}>Lupa password?</Text>
      </TouchableOpacity>
      <Gap height={30} />
      <Button btnName="LOGIN" onPress={() => navigation.replace('MainApp')} />
      <Or />
      <Button
        btnName="DAFTAR"
        color="#ffffff"
        textColor="#E00120"
        onPress={() => navigation.navigate('Register')}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.needhelp}>Butuh bantuan?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: '#ffffff',
  },
  imgLogo: {alignItems: 'center'},
  title: {fontSize: 25, fontFamily: 'Poppins-Medium', color: '#C0392B'},
  forgotpass: {
    textAlign: 'right',
    color: '#8D92A3',
    marginTop: 6,
    fontSize: 12,
  },
  needhelp: {textAlign: 'center', color: '#8D92A3', marginTop: 8, fontSize: 12},
});
