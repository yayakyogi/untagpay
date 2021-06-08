import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  Login,
  Register,
  ForgotPassword,
  Homepage,
  Messagepage,
  Scanpage,
  Historypage,
  Accountpage,
  OnDeveloping,
  Payments_Kuliah,
  Payments_Checkout,
  Payments_Autentication,
  Payments_Success,
} from '../pages';
import MainApp from './BottomTabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Beranda" component={Homepage} />
//       <Tab.Screen name="Pesan" component={Messagepage} />
//       <Tab.Screen name="Scan" component={Scanpage} />
//       <Tab.Screen name="Riwayat" component={Historypage} />
//       <Tab.Screen name="Akun" component={Accountpage} />
//     </Tab.Navigator>
//   );
// };
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplahScreen"
        component={SplashScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="OnDeveloping"
        component={OnDeveloping}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Payments_Kuliah"
        component={Payments_Kuliah}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Payments_Checkout"
        component={Payments_Checkout}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Payments_Autentication"
        component={Payments_Autentication}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Payments_Success"
        component={Payments_Success}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;
