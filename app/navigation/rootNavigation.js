import React from "react";

let navigationRef = React.createRef();

const navigate = (name, parrams) => {
  navigationRef.current?.navigate(name, parrams);
};

export default {
  navigate,
  navigationRef,
};
