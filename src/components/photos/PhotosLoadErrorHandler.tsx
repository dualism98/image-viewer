import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import indent from '../../theme/indent';
import borderRadius from '../../theme/borderRadius';
import {colors} from '../../theme/colors';

interface Props {
  onPress: () => void;
}

const PhotosLoadErrorHandler: React.FC<Props> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: indent.s,
  },

  button: {
    backgroundColor: colors.bg.tertiary,
    marginHorizontal: indent.m,
    paddingVertical: indent.s,
    borderRadius: borderRadius.m,
  },

  buttonText: {
    color: colors.tints.white[100],
    textAlign: 'center',
  },
});

export default PhotosLoadErrorHandler;
