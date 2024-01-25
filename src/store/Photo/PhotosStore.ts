import {runInAction} from 'mobx';
import ApiService from '../../services/ApiService';
import PhotosTypes from '../../types/app/photos';
import mapPhotosResponse from '../../types/mapping/mapPhotosResponse';
import {RootStore} from '../RootStore';
import Photo from './Photo';

class PhotosStore {
  photos: Photo[] = [];

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  async loadPhotos(page: number = 1) {
    const photos = await ApiService.loadPhotos(page);
    mapPhotosResponse(photos).map(photo => {
      this.addPhoto(photo);
    });
  }

  addPhoto(photo: PhotosTypes.Photo) {
    const existPhoto = this.photos.find(
      storedPhoto => storedPhoto.id === photo.id,
    );
    if (!existPhoto) {
      runInAction(() => {
        const newPhoto = new Photo(this.rootStore, photo);
        this.photos.push(newPhoto);
      });
    }
  }
}

export default PhotosStore;
