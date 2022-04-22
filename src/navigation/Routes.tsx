import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screens} from './Screens';
import {Profile} from '../screens/profile/Profile';
import {Dashboard} from '../screens/dashboard/Dashboard';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screens.Dashboard} component={Dashboard} />
        <Stack.Screen name={Screens.Profile} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
