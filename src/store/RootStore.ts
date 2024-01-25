import PhotosStore from './Photo/PhotosStore';

export class RootStore {
  photosStore: PhotosStore;

  constructor() {
    this.photosStore = new PhotosStore(this);
  }
}

export const rootStore = new RootStore();
