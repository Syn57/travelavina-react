import { fetchAndActivate, getRemoteConfig, getValue } from "firebase/remote-config";
import { firebaseApp } from "./FirebaseInitializer";

const remoteConfig = getRemoteConfig(firebaseApp);

remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000,
  fetchTimeoutMillis: 10000,
};

export const fetchRemoteConfig = async (key) => {
    try {
      await fetchAndActivate(remoteConfig);
      const jsonString = getValue(remoteConfig, key).asString();
      return jsonString
    } catch (err) {
      return null;
    }
};

export default remoteConfig;