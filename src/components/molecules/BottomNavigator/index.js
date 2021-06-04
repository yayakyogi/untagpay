import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IcAccountOn,
  IcAccountOff,
  IcHistoryOn,
  IcHistoryOff,
  IcHomeOn,
  IcHomeOff,
  IcMessageOn,
  IcMessageOff,
  IcScan,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Beranda':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
      break;
    case 'Pesan':
      return focus ? <IcMessageOn /> : <IcMessageOff />;
    case 'Scan':
      return (
        <View style={styles.bodyScan}>
          <IcScan />
        </View>
      );
    case 'Riwayat':
      return focus ? <IcHistoryOn /> : <IcHistoryOff />;
    case 'Akun':
      return focus ? (
        <IcAccountOn style={{marginLeft: 6}} />
      ) : (
        <IcAccountOff style={{marginLeft: 6}} />
      );
    default:
      return <IcScan />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (index == 2) {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonScan}>
              <View style={styles.icScan}>
                <Icon label={label} focus={isFocused} />
              </View>
              <Text
                style={{
                  color: isFocused ? '#C0392B' : '#AAA69D',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 13,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}>
              <Icon label={label} focus={isFocused} />
              <Text
                style={{
                  color: isFocused ? '#C0392B' : '#AAA69D',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 11,
                  marginTop: 3,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  buttonTab: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 9,
    paddingBottom: 7,
  },
  buttonScan: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingBottom: 7,
  },
  icScan: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    paddingTop: 10,
    paddingBottom: 7,
    paddingHorizontal: 8,
  },
  bodyScan: {backgroundColor: '#C0392B', borderRadius: 50, padding: 10},
});
