import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, View} from 'react-native';

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>Pilih Perguruan Tinggi</Text>
      <View style={styles.input}>
        <Picker
          //selectedValue={selectedLanguage}
          // onValueChange={(itemValue, itemIndex) =>
          //   setSelectedLanguage(itemValue)
          // }
          style={{marginTop: -2, height: 52}}>
          <Picker.Item label="-- Pilih --" />
          <Picker.Item label="Universitas 17 Agustus Surabaya" value="010101" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 15, fontFamily: 'Poppins-Regular'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    marginTop: 2,
  },
});
