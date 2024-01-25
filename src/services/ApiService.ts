import ApiPhotosTypes from '../types/api/photos';
import axiosInstance from './axiosInstance';
import {RequestError} from './errors/error';

class ApiService {
  async loadPhotos(page: number = 1): Promise<ApiPhotosTypes.Photo[]> {
    try {
      const response = await axiosInstance.get(
        `/photos?page=${page}&per_page=20`,
      );
      return response.data;
    } catch (err: any) {
      console.error('Error of getting photos list', err);
      throw new RequestError(`GET /photos error ${err.response}`);
    }
  }
}

export default new ApiService();
