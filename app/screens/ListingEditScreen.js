import React, { useEffect, useState } from "react";
import { StyleSheet, Platform, KeyboardAvoidingView } from "react-native";

import CatogoryItem from "../components/CatogoryPickerItem";
import ImageFormFeed from "../components/Forms/ImageFormFeed";
import Screen from "../components/Screen";
import { Form, FormFeed, SubmitButon, FormPicker } from "../components/Forms";
import * as Yup from "yup";
import useLocation from "../hooks/useLocation";
import { postListings } from "../api/listing";
import ProgressAnimationScreen from "./ProgressAnimationScreen";
import useApi from "../hooks/useApi";
import { getCategories } from "../api/categories";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please Select at Least one Image !"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  categoryId: Yup.string().required().label("Catagories"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen(props) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [animationVisible, setAnimationVisible] = useState(false);
  const location = useLocation();
  const authManager = useAuth();

  const { data: catagories, request: loadCategories } = useApi(getCategories);

  useEffect(() => {
    loadCategories();
  }, []);

  const handlelisting = async (listingData, { resetForm }) => {
    setUploadProgress(0);
    setAnimationVisible(true);

    const newListing = {
      ...listingData,
      userId: authManager.user.userId,
      location: location,
    };

    const res = await postListings(newListing, setUploadProgress);

    if (!res.ok) {
      console.log(res.data, res.status, res.problem);

      setAnimationVisible(false);
      return alert("Error while posting Listing !");
    }

    resetForm();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Screen style={styles.container}>
        {animationVisible && (
          <ProgressAnimationScreen
            onAnimationFinish={() => setAnimationVisible(false)}
            uploadProgress={uploadProgress}
          />
        )}
        <Form
          initialValues={{
            images: [],
            title: "",
            price: "",
            categoryId: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handlelisting}
        >
          <ImageFormFeed name="images" />

          <FormFeed
            name="title"
            placeholder="Title"
            autoCapitalize="words"
            autoCorrect
            icon="pen"
          />
          <FormFeed
            name="price"
            width="35%"
            placeholder="Price"
            keyboardType="number-pad"
            icon="currency-inr"
          />
          <FormPicker
            items={catagories}
            name="categoryId"
            width="50%"
            placeholder="Catagories"
            CatogoryItem={CatogoryItem}
            icon="grid"
          />
          <FormFeed
            name="description"
            placeholder="Description"
            numberOfLines={2}
            icon="message-text-outline"
          />
          <SubmitButon title="Register" backgroundColor="secondary" />
        </Form>
      </Screen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
