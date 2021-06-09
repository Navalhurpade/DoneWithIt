import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { useFormikContext } from "formik";
import RadioForm from "react-native-simple-radio-button";

import ErrorMessage from "./ErrorMessage";
import male from "./../../assets/male.png";
import female from "./../../assets/female.png";
import Color from "../../config/colors";

function FormGenderSelector({ name }) {
  const { setFieldValue, touched, setFieldTouched, errors, setValues, values } =
    useFormikContext();

  //Context 0 for male, and 1 for female
  var radio_props = [
    { label: "                                  ", value: 0 },
    { label: "    ", value: 1 },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>Select avatar</Text>
          <View style={styles.subContainer}>
            <Image source={male} style={styles.icon} />

            <Image source={female} style={styles.icon} />
          </View>
          <RadioForm
            formHorizontal
            labelHorizontal
            radio_props={radio_props}
            onPress={(value) => {
              setFieldTouched(name, true);
              setFieldValue(name, value);
            }}
          />
        </View>
      </View>
      <ErrorMessage error={errors[name]} visible={values[name] == undefined} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 19,
    color: Color.grey,
  },
  subContainer: {
    marginHorizontal: 40,
    paddingHorizontal: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    marginTop: 25,
    height: 90,
    width: 90,
    marginHorizontal: 40,
    marginBottom: 20,
  },
});

export default FormGenderSelector;
