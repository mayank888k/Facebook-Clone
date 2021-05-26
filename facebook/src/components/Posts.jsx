import React, { useEffect, useState } from "react";
import Post from "./Post";
import logo from "./logo.png";
import axios from "../axios.js";
import Pusher from "pusher-js";


const pusher = new Pusher('67b0ff49cf4886f490dd', {
  cluster: 'ap2'
});



const Posts = () => {

  
 
  const [postData, setPostData] = useState({
    data:[ {
          text:"",
          user:"Mayank",
          avatar:"",
          timestamp:Date.now()
    }
    ]
  });
  // console.log(postData)

  const syncFeed = async function () {
    try {
      const postResp = await axios.get("/retrieve/posts");
      console.log(postResp);

      setPostData(postResp);
    } catch (error) {
      console.log(error);
    }
  };


  //calling syncfeed to get posts
  useEffect(() => {

    syncFeed();
  }, []);

  //setting up pusher
  useEffect(()=>{
    const channel = pusher.subscribe('posts');
    channel.bind('inserted', function(data) {
      syncFeed()
    });
  },[])

  
  return (

    <div>
      {postData.data.map((post) => (
        <Post
          userImage={post.avatar}
          userName={post.user}
          timestamp={post.timestamp}
          image={post.imgName}
          caption={post.text}
        />
      ))}

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
      <Post
        userImage="https://mayank888k.github.io/portfolio/images/img2.jpg"
        userName="Mayank"
        timestamp="3:45 PM"
        image={logo}
        caption="Yeah It Works"
      />
    </div>
  );
};

export default Posts;
