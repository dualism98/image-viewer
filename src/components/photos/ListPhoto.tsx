import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

import {rootStore} from '../../store/RootStore';

interface Props {
  photoId: string;
  onPress: (photoId: string) => void;
}

const ListPhoto: React.FC<Props> = ({photoId, onPress}) => {
  const photo = rootStore.photosStore.photoById[photoId] ?? {};

  return (
    <Pressable style={styles.container} onPress={() => onPress(photoId)}>
      <Image source={{uri: photo.urls.small}} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
  },

  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default ListPhoto;
