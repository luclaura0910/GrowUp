import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveOffline(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // ignore for now
  }
}

export async function loadOffline(key: string) {
  try {
    const s = await AsyncStorage.getItem(key);
    return s ? JSON.parse(s) : null;
  } catch (e) {
    return null;
  }
}
