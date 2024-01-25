import {RouteProp} from '@react-navigation/native';
import NavigationKeys from './NavigationKeys';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamsList = {
  [NavigationKeys.ImagesListScreen]: undefined;
  [NavigationKeys.ImageViewingScreen]: {
    imageUrl: string;
  };
};

export type ImageListScreenRouteProp = RouteProp<
  RootStackParamsList,
  NavigationKeys.ImagesListScreen
>;
export type ImageListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  NavigationKeys.ImageViewingScreen
>;

export type ImageViewingScreenRouteProp = RouteProp<
  RootStackParamsList,
  NavigationKeys.ImageViewingScreen
>;
export type ImageViewingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  NavigationKeys.ImageViewingScreen
>;

export default RootStackParamsList;
