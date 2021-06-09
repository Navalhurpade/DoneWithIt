import React from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import MapView, { Marker } from "react-native-maps";

import Apptext from "../components/AppText";
import Color from "../config/colors";
import { useRoute } from "@react-navigation/native";
import { Form, FormFeed, SubmitButon } from "../components/Forms";
import OwnerInfo from "../components/OwnerInfo";
import { useState } from "react";

function ListDetailsScreen(props) {
  const { params } = useRoute();
  const { title, price, imageUri, location, owner, description } = params.data;
  const [showMessage, setShowMessage] = useState(false);

  const onMessegeSend = async ({ message }, { resetForm }) => {
    resetForm();

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    // let notificationId =
    //   await Notifications.presentLocalNotificationAsync({
    //     title: "Congrats",
    //     body: "Your message has sent to seller !",
    //     data: {
    //       _displayInForeground: true,
    //     },
    //   });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image style={styles.productImage} source={{ uri: imageUri }} />

      <Apptext style={styles.productTitle}> {title} </Apptext>
      <Apptext style={styles.productDescription}> {description} </Apptext>
      <Apptext style={styles.productPrize}> {"₹" + price} </Apptext>

      <OwnerInfo owner={owner} />
      <View style={styles.subContainer}>
        <View style={styles.form}>
          <Form
            initialValues={{ message: "is it still available ?" }}
            onSubmit={onMessegeSend}
          >
            {showMessage && (
              <Apptext
                style={{
                  color: Color.secondary,
                  alignSelf: "center",
                }}
              >
                Your Messege has been sent to seller !
              </Apptext>
            )}
            <FormFeed
              placeholder="   is it still available ?"
              name="message"
              autoCapitalize="sentences"
              autoCorrect
              small
            />
            <SubmitButon small title="Contact Seller" />
          </Form>
        </View>
        <View style={styles.mapContainer}>
          {location != undefined ? (
            <MapView
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.11,
                longitudeDelta: 0.11,
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              />
            </MapView>
          ) : null}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  form: {
    justifyContent: "flex-end",
  },
  productImage: {
    width: "100%",
    height: 258,
  },
  productPrize: {
    paddingHorizontal: 15,
    fontSize: 19,
    marginTop: 10,
    marginBottom: 7,
    color: Color.secondary,
    fontWeight: "700",
  },
  productTitle: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
    color: Color.darkGray,
    fontWeight: "bold",
    fontSize: 21,
  },
  productDescription: {
    color: Color.grey,
    fontWeight: "100",
    paddingHorizontal: 15,
    fontSize: 17,
  },
  map: {
    height: 240,
    width: "100%",
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    justifyContent: "flex-start",
  },
});

export default ListDetailsScreen;
