import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import TitleMenu from '../TitleMenu';
import {Imagepromo} from '../../atoms';
import {Promo_1, Promo_2} from '../../../assets';
import {Gap} from '../../atoms';
const MenuPromo = ({navigation}) => {
  return (
    <View>
      <TitleMenu
        title="Promo & Diskon"
        seeAll={() => {}}
        onPress={() => navigation.navigate('Register')}
      />
      <Gap height={20} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Imagepromo img={Promo_1} />
        <Imagepromo img={Promo_1} />
      </ScrollView>
    </View>
  );
};

export default MenuPromo;
