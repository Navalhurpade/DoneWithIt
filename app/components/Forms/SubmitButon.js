import { useFormikContext } from "formik";
import React from "react";

import AppButton from "../AppButton";

function SubmitButon({ title, backgroundColor, style, small = false }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      small={small}
      style={style}
      title={title}
      backgroundColor={backgroundColor}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButon;
