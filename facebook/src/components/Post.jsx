import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import './post.css'


const Post = ({ userImage, userName, timestamp, image, caption }) => {

  const [like, setLike] = useState('')
  const [count,setCount] = useState(0)

  const handleLike = () =>{
    setLike("liked")
    if(like ==="liked"){
      setCount(2)
    }
    
  }


  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={userImage} />
        <div className="post__topInfo">
        <h3>{userName}</h3>
        <p>{new Date(parseInt(timestamp)).toLocaleTimeString()}</p>

        </div>
      </div>
      <div className="post__middle">
        <p>{caption}</p>

        {/* Always pass the link with query to retrieve data */}
        <img src={`http://localhost:9000/retrieve/image/?name=${image}`} alt="" />
        <img src={image} alt="" />
      </div>
      <div className="post__bottum">
      <div onClick={handleLike} className={`bottum__icon ${like && count===0 && `liked`}`}>
          <ThumbUpAltIcon htmlColor="gray" />
          <h3>Like</h3>
      </div>
      <div  className="bottum__icon">
          <CommentIcon htmlColor="gray" />
          <h3>Comment</h3>
      </div>
      <div className="bottum__icon">
          <ShareIcon htmlColor="gray" />
          <h3>Share</h3>
      </div>

      </div>
    </div>
  );
};

export default Post;
