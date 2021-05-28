import { Avatar } from "@material-ui/core";
import React from "react";
import "./account.css";
import Post from './Post'

const Account = () => {
    const user = JSON.parse(localStorage.getItem('profile'))?.result
  return (
    <div className="account">
      <div className="cover_photo">
        <div className="profile_photo">
          <Avatar
            style={{
              borderRadius: "100px",
              height: "110px",
              width: "110px",
              top: "43vh",
              padding: "1px",
              margin: "0",
              border: "5px solid white",
              backgroundColor: "lightgray",
            }}
            className="avatar"
            src={user?.imageUrl}
            alt=""
          />
        </div>
      </div>
      <div className="profile__name">
        <h1>{user?.name}</h1>
        Add Bio
      </div>
      <div className="feed__tab">
          <h3 style={{borderBottom:"2px solid #2e81f4", color:"#2e81f4"}}>Post</h3>
          <h3>About</h3>
          <h3>Freinds</h3>
          <h3>Photos</h3>
          <h3>Story Archive</h3>

      </div>
      <div className="account_feed">
        <Post
          userImage="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg"
          userName="Bill Gates"
          timestamp="3:45 PM"
          image="https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/2021-Reddit-AMA/ama-recap_2021_article-hero_1200x564_01.ashx"
          caption="Hey Mayank Develop a Tinder for me I need one 😜😜"
        />
        <Post
          userName="Jeff Bezos"
          userImage="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
          image="https://variety.com/wp-content/uploads/2019/12/jeff_bezos2019_rev-1.png"
          timestamp="3:45 PM"
          caption="Amazon is the Best !!!!"
        />
        <Post
          userName="Elon Musk"
          userImage="https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg"
          image="https://pbs.twimg.com/media/E0qeyaZXEAIsxAZ?format=jpg&name=medium"
          timestamp="3:45 PM"
          caption="Buy Bitcoins Now Man !!!!"
        />
      </div>
    </div>
  );
};

export default Account;
