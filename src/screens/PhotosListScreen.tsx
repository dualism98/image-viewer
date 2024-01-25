/* eslint-disable react-hooks/exhaustive-deps */
import {observer} from 'mobx-react-lite';
import React, {useCallback} from 'react';
import {Alert, FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {rootStore} from '../store/RootStore';
import ListPhoto from '../components/photos/ListPhoto';
import indent from '../theme/indent';
import {PhotosListScreenNavigationProp} from '../navigation/types';
import NavigationKeys from '../navigation/NavigationKeys';
import {colors} from '../theme/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PhotosLoadErrorHandler from '../components/photos/PhotosLoadErrorHandler';

const START_PAGE = 1;

const PhotosListScreen: React.FC = observer(() => {
  const [paginationLoadError, setPaginationLoadError] =
    React.useState<Error | null>(null);

  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(START_PAGE);

  const photoIds = rootStore.photosStore.photoIds;

  const navigation = useNavigation<PhotosListScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    refreshPhotosList();
  }, []);

  const refreshPhotosList = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await rootStore.photosStore.refreshPhotosList();
      setPage(START_PAGE + 1);
    } catch {
      Alert.alert('Error', 'Error of getting photos list. Try again', [
        {text: 'OK'},
      ]);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const loadPhotos = useCallback(async () => {
    setPaginationLoadError(null);
    try {
      await rootStore.photosStore.loadPhotos(page);
      setPage(currPage => currPage + 1);
    } catch (err: any) {
      setPaginationLoadError(err);
    }
  }, [page]);

  const handlePhotoPress = useCallback((photoId: string) => {
    navigation.navigate(NavigationKeys.PhotosViewingScreen, {photoId});
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photoIds}
        keyExtractor={item => item}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshPhotosList}
          />
        }
        renderItem={data => (
          <ListPhoto photoId={data.item} onPress={handlePhotoPress} />
        )}
        initialNumToRender={21}
        numColumns={3}
        contentContainerStyle={[
          styles.contentContainer,
          {paddingBottom: insets.bottom + indent.s},
        ]}
        columnWrapperStyle={styles.wrapper}
        // onEndReached={loadPhotos}
        onEndReachedThreshold={0.3}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <>
            {!paginationLoadError && (
              <PhotosLoadErrorHandler onPress={loadPhotos} />
            )}
          </>
        }
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.primary,
  },

  contentContainer: {
    padding: indent.xxs,
    gap: indent.xxs,
  },

  wrapper: {
    gap: indent.xxs,
  },
});

export default PhotosListScreen;
