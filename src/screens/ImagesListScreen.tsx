/* eslint-disable react-hooks/exhaustive-deps */
import {observer} from 'mobx-react-lite';
import React, {useCallback} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';

import {rootStore} from '../store/RootStore';
import ListPhoto from '../components/ListPhoto';
import indent from '../theme/indent';

const START_PAGE = 1;

const ImagesListScreen: React.FC = observer(() => {
  const [error, setError] = React.useState<Error | null>(null);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(START_PAGE);

  const photoIds = rootStore.photosStore.photoIds;

  React.useEffect(() => {
    refreshPhotosList();
  }, []);

  const refreshPhotosList = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await rootStore.photosStore.refreshPhotosList();
      setPage(START_PAGE + 1);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const onEndReached = useCallback(async () => {
    try {
      await rootStore.photosStore.loadPhotos(page);
      setPage(currPage => currPage + 1);
    } catch (err: any) {
      setError(err);
    }
  }, [page]);

  const handlePhotoPress = useCallback((photoId: string) => {
    // navigating to screen
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
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.wrapper}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    padding: indent.xxs,
    gap: indent.xxs,
  },

  wrapper: {
    gap: indent.xxs,
  },
});

export default ImagesListScreen;
