import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";

function Sidebar(props) {
  const handleClick = () => {
    console.log("next");
  };
  var num = 0;
  num = props.num === 2 ? 5 : 0;
  num = props.num === 3 ? 10 : 0;

  return (
    <>
      <div className="sidebar">
        <h3>Document List</h3>
        <SidebarItem num={num + 1} />
        <SidebarItem num={num + 2} />
        <SidebarItem num={num + 3} />
        <SidebarItem num={num + 4} />
        <SidebarItem num={num + 5} />

        <nav aria-label="Page navigation example mx-3">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="/" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/2">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/3">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/3" aria-label="Next">
                <span aria-hidden="true" onClick={handleClick}>
                  &raquo;
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
