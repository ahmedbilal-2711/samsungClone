import React from "react";
import Space from "./spaceCom";
const boxWrapper = (props) => {
  return (
    <div className="m-auto flex flex-col justify-center align-middle">
      <Space />
      {props.children}
      <Space />
    </div>
  );
};

export default boxWrapper;
