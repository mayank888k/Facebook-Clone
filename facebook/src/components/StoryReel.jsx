import React from "react";
import Story from "./Story";
import './storyreel.css'

const StoryReel = () => {
  return (
    <div className="story__reel">
      <Story
        title="Mayank"
        imgUrl="https://mayank888k.github.io/portfolio/images/img2.jpg"
        storyUrl="https://specials-images.forbesimg.com/imageserve/5ea6925a3cd98c0007a389d9/960x0.jpg?fit=scale"
      />
      <Story
        title="Jeff Bezos"
        imgUrl="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        storyUrl="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/jeff_bezos_amazon_660_170420042249_210720123218.jpg"
        
      />
      <Story
        title="Bill Gates"
        imgUrl="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg"
        storyUrl="https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/2021-Reddit-AMA/ama-recap_2021_article-hero_1200x564_01.ashx"
      />
      <Story
        title="Elon Musk"
        imgUrl="https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg"
        storyUrl="https://pbs.twimg.com/media/E0qeyaZXEAIsxAZ?format=jpg&name=medium"
      />
    </div>
  );
};

export default StoryReel;
