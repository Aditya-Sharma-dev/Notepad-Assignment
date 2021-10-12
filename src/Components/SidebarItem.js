import React from "react";
import "./SidebarItem.css";

function SidebarItem(props) {
    var icon=0;
    const handleClick=()=>{
        console.log("click");
            icon=1;
    }
  return (
    <>
      <div className="container" onClick={handleClick}>
        <h6 className="number text-center">0{props.num}</h6>
        <p className="content">
          Lorem ipsum dolor sit amet quis deleniti atque at aliquid.....
        </p>
        {(icon===0)?<i className="bi bi-dash-circle"></i>:<i className="bi bi-check-circle"></i>}
      </div>
    </>
  );
}

export default SidebarItem;
