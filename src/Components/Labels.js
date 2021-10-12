import React from "react";
import Label from "./Label";
import "./Labels.css";

function Labels() {
  return (
    <div className="labels">
      <div className="contain">
        <Label color="red" num="1" checked={true} />
        <Label color="green" num="2" checked={false} />
        <Label color="blue" num="3" checked={false} />
        <Label color="yellow" num="4" checked={false} />
      </div>
    </div>
  );
}

export default Labels;
