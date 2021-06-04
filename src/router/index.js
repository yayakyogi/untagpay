import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, Login} from '../pages';

const Stack = createStackNavigator();
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
    </Stack.Navigator>
  );
};

export default Router;
