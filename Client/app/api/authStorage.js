import * as SecureStore from "expo-secure-store";

const storeToken = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
    console.log("Storing Sucess !");
  } catch (error) {
    console.log("got " + value + " for storing !");
    console.log("Error while storing token", error);
  }
};

const getToken = async (key) => {
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value) return value;
    console.log("No Value Found For " + key);
    return;
  } catch (error) {
    console.log("error while geting token", error);
  }
};

const removeToken = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error while removing token " + key);
  }
};

export default { getToken, storeToken, removeToken };
