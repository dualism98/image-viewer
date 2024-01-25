import ApiPhotosTypes from '../api/photos';
import PhotosTypes from '../app/photos';

const mapPhotosResponse = (
  photos: ApiPhotosTypes.Photo[],
): PhotosTypes.Photo[] => {
  return photos;
};

export default mapPhotosResponse;
