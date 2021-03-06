import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import { ThumbUpAltOutlined } from "@mui/icons-material";
import { ChatOutlined } from "@mui/icons-material";
import { ShareOutlined } from "@mui/icons-material";
import { SendOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar className="avatar" src={photoURL}>
          {name[0]}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
