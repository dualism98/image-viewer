import React from 'react';
import {StyleSheet, View} from 'react-native';
import ApiService from '../services/ApiService';

const ImagesListScreen: React.FC = () => {
  React.useEffect(() => {
    ApiService.loadPhotos().then(res => {
      console.log('res', res);
    });
  }, []);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ImagesListScreen;
