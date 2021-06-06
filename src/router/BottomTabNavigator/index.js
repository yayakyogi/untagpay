import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Homepage,
  Messagepage,
  Scanpage,
  Historypage,
  Accountpage,
} from '../../pages';
import {IcScan, IcAccount, IcChat, IcHistory, IcHome} from '../../assets';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 60,
          textAlign: 'center',
        },
      }}>
      {/* Beranda */}
      <Tab.Screen
        name="Beranda"
        component={Homepage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={IcHome}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#C0392B' : '#AAA69D',
                }}
              />
              <Text
                style={{
                  color: focused ? '#C0392B' : '#AAA69D',
                  fontSize: 10,
                  fontFamily: 'Poppins-Medium',
                }}>
                Beranda
              </Text>
            </View>
          ),
        }}
      />

      {/* Pesan */}
      <Tab.Screen
        name="Pesan"
        component={Messagepage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={IcChat}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#C0392B' : '#AAA69D',
                }}
              />
              <Text
                style={{
                  color: focused ? '#C0392B' : '#AAA69D',
                  fontSize: 10,
                  fontFamily: 'Poppins-Medium',
                }}>
                Pesan
              </Text>
            </View>
          ),
        }}
      />

      {/* Scan */}
      <Tab.Screen
        name="Scan"
        component={Scanpage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <View style={styles.scanContainer}>
                <View style={styles.scanBody}>
                  <IcScan />
                </View>
              </View>
              <Text style={styles.labelScan}>Scan</Text>
            </View>
          ),
        }}
      />

      {/* Riwayat */}
      <Tab.Screen
        name="Riwayat"
        component={Historypage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={IcHistory}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#C0392B' : '#AAA69D',
                }}
              />
              <Text
                style={{
                  color: focused ? '#C0392B' : '#AAA69D',
                  fontSize: 10,
                  fontFamily: 'Poppins-Medium',
                }}>
                Riwayat
              </Text>
            </View>
          ),
        }}
      />

      {/* Akun */}
      <Tab.Screen
        name="Akun"
        component={Accountpage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={IcAccount}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#C0392B' : '#AAA69D',
                }}
              />
              <Text
                style={{
                  color: focused ? '#C0392B' : '#AAA69D',
                  fontSize: 10,
                  fontFamily: 'Poppins-Medium',
                }}>
                Akun
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  scanContainer: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 50,
    marginTop: -50,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#ecf0f1',
  },
  scanBody: {
    backgroundColor: '#C0392B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 40,
  },
  labelScan: {
    color: '#C0392B',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
