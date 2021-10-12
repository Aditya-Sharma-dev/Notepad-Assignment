import React from "react";
import "./Label.css";
import TextSelector from "text-selection-react";

function Label(props) {
  const handler = (html, text) => {
    console.log("text", text);
    console.log("html", html);
  };
  const handleChange = () => {
    //   console.log("Radio ${props.num} is clicked");
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
    />;
  };
  return (
    <>
      <div className="label">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={handleChange}
            checked={props.checked}
          />
          <div className={`label_icon ${props.color}`}></div>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <p>Category {props.num}</p>
          </label>
        </div>
      </div>
    </>
  );
}

export default Label;
