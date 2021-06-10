import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigation from "./app/navigation/AuthNavigator";
import AuthContext from "./app/api/auth/AuthContext";
import MyTheme from "./app/navigation/navaigationTheam";
import OfllineNotice from "./app/components/OfllineNotice";
import AppLoading from "expo-app-loading";
import { isUserLogedin } from "./app/api/auth/authApi";
import rootNavigation from "./app/navigation/rootNavigation";
import logger from "./app/utils/loger";

const Roboto = require("./app/assets/fonts/SignikaNegative-Regular.ttf");

//Starting Bugsnag
// logger.start();
// console.log = logger.log;

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsready] = useState(false);

  const restoreUser = async () => {
    const foundUser = await isUserLogedin();
    if (foundUser) return setUser(foundUser);
  };

  let [fontsLoaded] = useFonts({
    Font: Roboto,
  });

  if (!isReady || !fontsLoaded)
    return (
      <AppLoading
        style={{ height: "100%", width: "100%" }}
        onError={(error) => console.log(error)}
        startAsync={restoreUser}
        onFinish={() => setIsready(true)}
      />
    );

  return (
    <>
      <OfllineNotice />
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer ref={rootNavigation.navigationRef} theme={MyTheme}>
          {!user ? <AuthNavigation /> : <AppNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
