import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {PhotosViewingScreenRouteProp} from '../navigation/types';
import {rootStore} from '../store/RootStore';
import {colors} from '../theme/colors';

const PhotosViewingScreen: React.FC = () => {
  const route = useRoute<PhotosViewingScreenRouteProp>();
  const photo = rootStore.photosStore.photoById[route.params.photoId] ?? {};

  return (
    <View style={styles.container}>
      <Image source={{uri: photo.urls.full}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.primary,
  },

  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

export default PhotosViewingScreen;
