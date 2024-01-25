import {observer} from 'mobx-react-lite';
import React, {useCallback} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';

import {rootStore} from '../store/RootStore';

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
    console.log('Here2');
    try {
      await rootStore.photosStore.loadPhotos(page);
      setPage(currPage => currPage + 1);
    } catch (err: any) {
      setError(err);
    }
  }, [page]);

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
        renderItem={data => <Text>{data.item}</Text>}
        initialNumToRender={20}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ImagesListScreen;
