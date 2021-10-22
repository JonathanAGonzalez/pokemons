import React from "react";

const Button = ({ action, disable, text }) => {
  return (
    <>
      {disable === null ? (
        <button disabled onClick={action}>
          {text}
        </button>
      ) : (
        <button onClick={action}>{text}</button>
      )}
    </>
  );
};

export default Button;
