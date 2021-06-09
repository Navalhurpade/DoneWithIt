import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const prefix = "cached";
const expiryInMInutes = 15;

const store = async (key, value) => {
  try {
    const timestamp = Date.now();
    const item = { value: value, timestamp: timestamp };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const storedTime = dayjs(item.timestamp);
  const currentTime = dayjs();

  return currentTime.diff(storedTime, "minute") > expiryInMInutes;
};

const get = async (key) => {
  try {
    const serializedValue = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(serializedValue);

    if (!item) return null;

    //If item is Expired clear AsyncStorage
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      console.log("cache expired !");
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default { store, get };
