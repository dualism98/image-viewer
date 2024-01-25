declare module 'react-native-config' {
  export interface NativeConfig {
    API_BASE_URL: string;
    API_ACCESS_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
