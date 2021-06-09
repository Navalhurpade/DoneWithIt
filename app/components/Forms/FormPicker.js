import React from "react";
import { useFormikContext } from "formik";
import { View } from "react-native";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  CatogoryItem,
  width,
  showImg,
  placeholder,
  icon,
  name,
}) {
  const { touched, values, setFieldTouched, handleChange, errors } =
    useFormikContext();

  return (
    <View>
      <AppPicker
        items={items}
        selectedItem={values[name]}
        onItemSelect={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        placeholder={placeholder}
        icon={icon}
        width={width}
        CatogoryItem={CatogoryItem}
        showImg={showImg}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormPicker;
