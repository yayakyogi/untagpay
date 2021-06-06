import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ReactDevelopmet} from '../../assets';
import {Button, Gap} from '../../components';

const OnDeveloping = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman ini masih tahap pengembangan</Text>
      <Image source={ReactDevelopmet} style={{width: 250, height: 250}} />
      <Text style={styles.text2}>
        Silahkan pilih menu pembayaran kuliah untuk eksperien yang lebih jauh
      </Text>
      <Gap height={30} />
      <Button
        btnName="Homepage"
        onPress={() => navigation.navigate('MainApp')}
      />
    </View>
  );
};

export default OnDeveloping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
  text2: {
    width: 300,
    fontFamily: 'Poppins-light',
    color: '#020202',
    opacity: 0.8,
    fontSize: 15,
    textAlign: 'center',
  },
});
