import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = ({ width = "75px", height = "40px" }) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
};

export default Loader;
