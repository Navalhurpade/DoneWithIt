import { useContext } from "react";
import authStorage from "../api/auth/authStorage";
import AuthContext from "../api/auth/AuthContext";
import jwtDecode from "jwt-decode";

const authTokenKey = authStorage.authTokenKey;

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    authStorage.removeToken(authTokenKey);
    setUser(null);
    return;
  };

  const storeUser = async (authToken) => {
    try {
      //storing the auth-Token in device
      await authStorage.storeToken(authToken);

      //Decoding the Token
      const userData = jwtDecode(authToken);

      //updating the usersData in app !
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return { user, setUser, logOut, storeUser };
};

export default useAuth;
