import * as SecureStore from "expo-secure-store";
const authTokenKey = "x-auth-token";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(authTokenKey, token);
  } catch (error) {
    console.log("Error while storing token", error);
  }
};

const getToken = async () => {
  try {
    let token = await SecureStore.getItemAsync(authTokenKey);
    if (token) return token;
  } catch (error) {
    console.log("error while geting token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(authTokenKey);
  } catch (error) {
    console.log("error while removing token " + authTokenKey);
  }
};

export default { getToken, storeToken, removeToken, authTokenKey };
