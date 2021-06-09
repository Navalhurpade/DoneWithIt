import { useEffect, useRef, useState } from "react";
import expoNotificationApi from "./../api/PushNotification";
import * as Notifications from "expo-notifications";
import rootNavigation from "./../navigation/rootNavigation";
import routes from "./../navigation/routes";
import { Platform } from "react-native";
// import { Notifications } from "expo";
// import * as permissions from "expo-permissions";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    priority: "MAX",
  }),
});

const useNotification = () => {
  const notiListener = useRef();
  const responseListener = useRef();
  const [notification, setNotification] = useState(false);

  const registerForPushNotificationsAsync = async () => {
    try {
      const perminssion = await Notifications.getPermissionsAsync();
      if (!perminssion.granted) return;

      const token = await (await Notifications.getExpoPushTokenAsync()).data;

      console.log(token);

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
      let expov = "0.8.2";
      expoNotificationApi.register(token);
    } catch (error) {
      console.log("error while geting expo push token\n", error);
    }
  };

  const notificationListner = () => {
    Notifications.addNotificationResponseReceivedListener((n) => {
      console.log("taped !", n);
      rootNavigation.navigate(routes.ACCOUNT_SCREEN);
    });

    Notifications.addNotificationReceivedListener((notification) => {
      console.log("res", notification);
    });

    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    Notifications.setNotificationHandler({
      handleSuccess: (n) => {
        console.log("sd", n);
      },
      handleNotification: async (n) => {
        console.log("asd", n);
      },
      //   {
      //   shouldShowAlert: true,
      //   shouldPlaySound: true,
      //   shouldSetBadge: false,
      // }),
    });
  };
};

export default useNotification;
