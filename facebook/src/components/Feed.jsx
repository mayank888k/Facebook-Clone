import React from "react";
import "./feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Posts />
    </div>
  );
};

export default Feed;
