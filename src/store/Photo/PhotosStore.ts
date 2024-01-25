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

  get photoIds() {
    return this.photos.map(photo => photo.id);
  }

  async refreshPhotosList() {
    try {
      const photos = await ApiService.loadPhotos(1);
      runInAction(() => {
        this.photos = photos.map(photo => new Photo(this.rootStore, photo));
      });
    } catch {
      throw new Error();
    }
  }

  async loadPhotos(page: number = 1) {
    try {
      const photos = await ApiService.loadPhotos(page);
      mapPhotosResponse(photos).map(photo => {
        this.addPhoto(photo);
      });
    } catch {
      throw new Error();
    }
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
