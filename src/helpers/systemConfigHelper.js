import localStorageHelper, {localStorageKeys} from "./localStorageHelper";

import {defaultSystemConfig} from "environment/app/defaultSystemConfig";

export const getLanguage = () => {
  const localData = localStorageHelper.getLocalStorageItem(localStorageKeys.SYSTEM);
  const result = localData ? localData : defaultSystemConfig;
  return result.language;
};

export const updateSystemConfig = (key, value) => {
  const oldLocalData = localStorageHelper.getLocalStorageItem(localStorageKeys.SYSTEM);
  let newLocalData;
  if (oldLocalData) {
    newLocalData = {
      ...oldLocalData,
      [key]: value
    };
  } else {
    newLocalData = {
      ...defaultSystemConfig,
      [key]: value
    };
  }

  localStorageHelper.updateLocalStorageItem(localStorageKeys.SYSTEM, newLocalData);
};
