import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./freindCard.css";

const FreindCard = ({name,src}) => {
  const [freind, setFreind] = useState(true)
  const [remove, setRemove] = useState(false)

  const handleFreind = (e) =>{
    e.preventDefault()

    setFreind(prevState => !prevState)
  }
  const handleRemove = (e) =>{
    e.preventDefault()

    setRemove(prevState => !prevState)
  }
  const display = remove ? {display:"none"} : {borderBottom: "0px solid red"}
  console.log(display)

  return (


    <div style={display}>
      <div className="friend">
        <Avatar src={src} style={{ height: "55px", width: "55px" }} />
        <div className="friend__details">
          <h3>{name}</h3>
          <button
            onClick = {handleFreind}
            style={{ backgroundColor: "#2e81f4", color: "white" }}
            className="btn"
          >
            {freind ? "Add Friend" : "Friends"}
          </button>
          <button onClick={handleRemove} className="btn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default FreindCard;
