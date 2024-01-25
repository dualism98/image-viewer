import {makeAutoObservable} from 'mobx';
import PhotosTypes from '../../types/app/photos';
import {RootStore} from '../RootStore';

class Photo {
  id: string;
  width: number;
  height: number;
  urls: PhotosTypes.PhotoUrls;

  rootStore: RootStore;

  constructor(rootStore: RootStore, photo: PhotosTypes.Photo) {
    this.id = photo.id;
    this.width = photo.width;
    this.height = photo.height;
    this.urls = photo.urls;

    this.rootStore = rootStore;

    makeAutoObservable(this, {rootStore: false});
  }
}

export default Photo;
