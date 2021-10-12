import React from "react";
import "./Body.css";
import TextSelector from "text-selection-react";

function Body(props) {
    const handler = (html, text) => {
        console.log("text", text);
        console.log("html", html);
    }
  return (
      <>
    <TextSelector
    unmark={true}
    unmarkText="X"
      events={[
        {
          text: "Click to annotate",
          handler: handler,
        },
      ]}
      color={"red"}
      colorText={true}
    />
    <div className="body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias
        harum nisi et adipisci voluptates, corporis quisquam dolorum suscipit!
        Cupiditate deleniti tempora a quas iure, earum maxime aperiam assumenda
        dignissimos, asperiores numquam, at eum architecto harum mollitia
        eveniet repudiandae officiis? Perspiciatis itaque non eveniet iste eos.
        Temporibus dolorum ipsam repellendus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolores ab consequuntur consectetur sed
        nulla ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, provident quod natus accusantium hic ea repudiandae! Facilis ut a magni.
      </p>
    </div>
    </>
  );
}

export default Body;
