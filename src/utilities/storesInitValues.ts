export const localInitValues = <T>(key: string, initVal: T) => {
  const getLocalData = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : initVal;
  return getLocalData;
};
