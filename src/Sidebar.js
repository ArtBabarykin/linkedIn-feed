import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recientItem = (topic) => (
    <div className="sidebar__receintItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://i.pinimg.com/originals/a3/af/35/a3af356c5d57a46a1abdf37421ce3ac3.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user?.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">472</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recientItem("react.js")}
        {recientItem("programming")}
        {recientItem("sofrware engineering")}
        {recientItem("design")}
        {recientItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
