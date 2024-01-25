import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavigationKeys from './NavigationKeys';
import RootStackParamsList from './types';
import PhotosListScreen from '../screens/PhotosListScreen';
import PhotosViewingScreen from '../screens/PhotosViewingScreen';
import {colors} from '../theme/colors';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: colors.bg.secondary},
          headerTintColor: colors.tints.white[100],
        }}>
        <Stack.Screen
          name={NavigationKeys.PhotosListScreen}
          options={{
            title: 'Photos',
          }}
          component={PhotosListScreen}
        />
        <Stack.Screen
          name={NavigationKeys.PhotosViewingScreen}
          options={{
            title: '',
            presentation: 'card',
            animation: 'slide_from_bottom',
          }}
          component={PhotosViewingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
