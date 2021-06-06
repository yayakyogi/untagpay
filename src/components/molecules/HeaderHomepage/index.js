import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {BrandHomepage, user, IcNotification} from '../../../assets';

const HeaderHomepage = ({onPressnotif, onPressuser}) => {
  return (
    <View style={styles.container}>
      <BrandHomepage />
      <View style={styles.user}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressnotif}>
          <IcNotification />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressuser}>
          <View style={styles.borderUser}>
            <Image
              source={user}
              style={{width: 38, height: 38, borderRadius: 50}}
            />
          </View>
        </TouchableOpacity>
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
