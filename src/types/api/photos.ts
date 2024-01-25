namespace ApiPhotosTypes {
  export type Photo = {
    id: string;
    width: number;
    height: number;
    urls: PhotoUrls;
  };

  export type PhotoUrls = {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export default ApiPhotosTypes;
