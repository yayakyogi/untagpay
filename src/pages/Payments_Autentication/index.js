import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {Untagpay} from '../../assets';
import {Header, Gap, Button} from '../../components';

const Payments_Autentication = ({navigation, route}) => {
  const {judul} = route.params;
  const {nama} = route.params;
  const {jenis} = route.params;
  const {virtualAccount} = route.params;
  const {nominal} = route.params;

  const [password, setPassword] = useState('');

  const onVerify = () => {
    if (password) {
      if (password == '12345678') {
        navigation.replace('Payments_Success', {
          judul: judul,
          nama: nama,
          jenis: jenis,
          virtualAccount: virtualAccount,
          nominal: nominal,
        });
        setPassword('');
      } else {
        Alert.alert('Password salah silahkan ulangi lagi');
        setPassword('');
      }
    } else {
      Alert.alert('Password tidak boleh kosong');
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Autentikasi"
        onBack={() => {}}
        onPress={() => navigation.navigate('Payments_Checkout')}
      />
      <View style={styles.body}>
        <Untagpay />
        <Gap height={20} />
        <Text style={styles.text}>
          Masukkan Password yang sama pada saat anda login
        </Text>
        <Gap height={30} />
        <TextInput
          style={styles.form}
          placeholder="Masukkan password anda"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={30} />
        <TouchableOpacity onPress={() => onVerify()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>KIRIM</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payments_Autentication;

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {alignItems: 'center', paddingTop: 20, paddingHorizontal: 20},
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#C0392B',
    textAlign: 'center',
    width: 300,
  },
  form: {
    borderWidth: 1,
    borderColor: '#020202',
    fontSize: 15,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#E00120',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E00120',
  },
  btnText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
