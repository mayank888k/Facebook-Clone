
import React from "react";
import FreindCard from "./FreindCard";
import "./friends.css";

const Friends = () => {
  return (
    <div className="friends">
      <div className="friend__container">
        <div className="friend__title">
          <h1>Friends</h1>
          <h3>People you may know</h3>
        </div>
        <FreindCard name = "Mayank" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <FreindCard name = "Rohan" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <FreindCard name = "Anshika" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <FreindCard name = "Ajitesh" src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <FreindCard name = "Naruto" src="https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFydXRvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <FreindCard name = "Light Yagami" src="https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmFydXRvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <FreindCard name = "Sensuke" src="https://images.unsplash.com/photo-1541562232579-512a21360020?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        <FreindCard name = "Sakura" src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
      </div>
    </div>
  );
};

export default Friends;
