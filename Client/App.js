import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./app/api/AuthContext";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigation from "./app/navigation/AuthNavigator";
import MyTheme from "./app/navigation/navaigationTheam";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { isUserLogedin } from "./app/api/auth";

export default function App() {
  const [user, setUser] = useState();

  const reStoreToken = async () => {
    const foundUser = await isUserLogedin();
    console.log(foundUser);
    if (foundUser) setUser(foundUser);
  };

  useEffect(() => {
    reStoreToken();
  }, []);

  console.log("currently user is ", user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={MyTheme}>
        {!user ? <AuthNavigation /> : <AppNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
