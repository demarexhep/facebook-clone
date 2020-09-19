import React from "react";
import "./Stories.css";
import { Avatar } from "@material-ui/core";

function Stories({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="stories">
      <Avatar className="stories__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Stories;
