import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Lupa Password"
        onPress={() => navigation.navigate('Login')}
      />
      <View style={styles.bodyContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.information}>
            <Text style={styles.textInformation}>
              Pastikan masukkan email aktif karena link verifikasi reset
              password akan dikirim melalui email anda
            </Text>
          </View>
          <Gap height={20} />
          <TextInput label="Email" placeholder="Masukkan Email Anda" />
          <Gap height={40} />
          <Button btnName="KIRIM" />
        </ScrollView>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
  bodyContainer: {marginTop: 40, paddingHorizontal: 25},
  information: {
    borderWidth: 1,
    borderColor: '#E00120',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#d63031',
  },
  textInformation: {color: '#ffffff'},
});
