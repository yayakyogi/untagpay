import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';

const ListDataTransaction = ({Key, Value}) => {
  return (
    <View style={styles.bill}>
      <Text style={styles.listKey}>{Key}</Text>
      <Text style={styles.listData}>{Value}</Text>
    </View>
  );
};

export default ListDataTransaction;

const styles = StyleSheet.create({
  bill: {flexDirection: 'row', justifyContent: 'space-between'},
  listKey: {fontFamily: 'Poppins-Thin', color: '#8D92A3', marginBottom: 15},
  listData: {fontFamily: 'Poppins-Medium', opacity: 0.7},
});
