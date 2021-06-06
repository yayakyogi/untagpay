import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import {user} from '../../assets';

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styles.btnEditprofil}>
      <Text style={styles.btnText}>{text}</Text>
      <Text>&#x276F;</Text>
    </TouchableOpacity>
  );
};
const Accountpage = () => {
  return (
    <View style={styles.container}>
      <Header title="Akun" />
      <View style={styles.imgprofile}>
        <View style={styles.borderImg}>
          <Image source={user} style={styles.imguser} />
        </View>
        <Text style={styles.namauser}>Yayak Yogi</Text>
        <Text style={styles.email}>yayaktaka@gmail.com</Text>
      </View>
      <View style={styles.profile}>
        <Text style={styles.titlePage}>Pengaturan Akun</Text>
        <Button text="Edit Profile" />
        <Button text="Alamat" />
        <Button text="Keamanan" />
        <Button text="Pembayaran" />
        <Button text="Keluar" />
      </View>
    </View>
  );
};

export default Accountpage;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f1f2f6'},
  imgprofile: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  borderImg: {
    borderStyle: 'dashed',
    borderColor: '#89A',
    borderWidth: 1,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 110 / 2,
    overflow: 'hidden',
    marginBottom: 10,
  },
  imguser: {
    width: 110,
    height: 110,
    borderRadius: 50,
  },
  namauser: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  email: {
    marginTop: 5,
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#89A',
  },
  btnEditprofil: {
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 5,
  },
  btnText: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },

  profile: {
    paddingVertical: 16,
    paddingLeft: 24,
    paddingRight: 32,
    flex: 2,
    backgroundColor: 'white',
    marginTop: 25,
    fontFamily: 'Poppins-Medium',
  },
  titlePage: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
