import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {Header, MenuMessage} from '../../components';
import {user, user2, user3} from '../../assets';

const Messagepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Kotak masuk" />
      <MenuMessage
        imgMsg={user}
        title="Yayak Yogi"
        messages="lorem ipsum dolor sit amet sloesdk"
        time="19.30"
        onPress={() => {}}
      />
      <MenuMessage
        imgMsg={user2}
        title="Hazard Ginantaka"
        messages=" Lorem Ipsum has been the industry's standard..."
        time="06.50"
        onPress={() => {}}
      />
      <MenuMessage
        imgMsg={user3}
        title="Taka"
        messages="Standard dummy text ever since the 1500s,"
        time="Kemarin"
        onPress={() => {}}
      />
    </View>
  );
};

export default Messagepage;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
});
