import React from "react";

const navigationRef = React.createRef();

const navigate = (name, parrams) => {
  navigationRef.current.navigate(name, parrams);
};

export default {
  navigate,
  navigationRef,
};
