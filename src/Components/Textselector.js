import React from "react";
import TextSelector from "text-selection-react";

function Textselector(props) {
  const handler = (html, text) => {
    console.log("text", text);
    console.log("html", html);
  };
  return (
    <TextSelector
      unmark={true}
      unmarkText="X"
      events={[
        {
          text: "",
          handler: handler,
        },
      ]}
      color={props.color}
      colorText={true}
    />
  );
}

export default Textselector;
