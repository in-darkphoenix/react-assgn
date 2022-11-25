import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0T6uRPLEUZ6kmROk1AjC3xQ8YoQKG6Rmjw&usqp=CAU"
          alt="cat profile"
        />
      </div>

      <div className="tools">
        <ul>
          <li>
            <i class="fa-solid fa-signal"></i>
          </li>
          <li>
            <i class="fa-solid fa-sign-hanging"></i>
          </li>
          <li>
            <i class="fa-solid fa-box-open"></i>
          </li>
          <li>
            <i class="fa-regular fa-comments"></i>
          </li>
          <li>
            <i class="fa-regular fa-file"></i>
          </li>
          <li>
            <i class="fa-solid fa-gear"></i>
          </li>
        </ul>
      </div>

      <div className="add-btn">
        <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>
  );
};

export default Sidebar;
