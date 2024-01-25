import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavigationKeys from './NavigationKeys';
import RootStackParamsList from './types';
import ImagesListScreen from '../screens/ImagesListScreen';
import ImageViewingScreen from '../screens/ImageViewingScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationKeys.ImagesListScreen}
          options={{title: 'Photos'}}
          component={ImagesListScreen}
        />
        <Stack.Screen
          name={NavigationKeys.ImageViewingScreen}
          component={ImageViewingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
