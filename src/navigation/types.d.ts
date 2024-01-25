import {RouteProp} from '@react-navigation/native';
import NavigationKeys from './NavigationKeys';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamsList = {
  [NavigationKeys.PhotosListScreen]: undefined;
  [NavigationKeys.PhotosViewingScreen]: {
    photoId: string;
  };
};

export type PhotosListScreenRouteProp = RouteProp<
  RootStackParamsList,
  NavigationKeys.PhotosListScreen
>;
export type PhotosListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  NavigationKeys.PhotosListScreen
>;

export type PhotosViewingScreenRouteProp = RouteProp<
  RootStackParamsList,
  NavigationKeys.PhotosViewingScreen
>;
export type PhotosViewingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  NavigationKeys.PhotosViewingScreen
>;

export default RootStackParamsList;
