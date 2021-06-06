import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BrandHomepage, IcUser, IcNotification} from '../../../assets';

const HeaderHomepage = () => {
  return (
    <View style={styles.container}>
      <BrandHomepage />
      <View style={styles.user}>
        <IcNotification />
        <View style={styles.borderUser}>
          <IcUser />
        </View>
      </View>
    </View>
  );
};

export default HeaderHomepage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#E00120',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 80,
  },
  borderUser: {
    borderRadius: 50,
    padding: 1,
    backgroundColor: '#ffffff',
  },
});
