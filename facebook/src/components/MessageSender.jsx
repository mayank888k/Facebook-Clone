import { Avatar, Button, IconButton, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./messageSender.css";
import SendIcon from "@material-ui/icons/Send";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import axios from "../axios.js";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const user = JSON.parse(localStorage.getItem('profile'))?.result

  const handleChange = (e) =>{
    if(e.target.files[0]){
      console.log(e.target.files[0])
      setImage(e.target.files[0])
    }
  }

  const handleSend = (e) => {
    e.preventDefault();

    if(image){
      const imgForm = new FormData()
      imgForm.append('file',image, image.name)
      console.log(imgForm)

      axios.post('/upload/image',imgForm, {
        headers:{
          'accept':"application/json",
          "Accept-Language":"en-US,en;q=0.8",
          "Content-Type":`multipart/form-data; boundary=${imgForm._boundary}`,
        }
      }).then((res)=>{

        console.log(res.data);

        const postData = {
          text:input,
          imgName:res.data[0].filename,
          user:"Mayank",
          avatar:"",
          timestamp:Date.now()
        }

        console.log(postData)
        savePost(postData)
      })
    }
    else{
      const postData = {
          text:input,
          user:user?.name,
          avatar:user?.imageUrl,
          timestamp:Date.now()
        }

        console.log(postData)
        savePost(postData)
    }

    setInput('')
    setImage(null)
  };

  const savePost = async (postData) =>{
    try {
      const postResp = await axios.post('/upload/posts',postData)
      console.log(postResp)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user?.imageUrl} />
        <form>
          
          <input value={input} onChange={(e)=>(setInput(e.target.value))} type="text" placeholder={`What's on your Mind !!!`} />
          {/* <input className="imgUploader" value={image} onChange={(e)=>(setImage(e.target.files[0]))}  type="file" /> */}
          <IconButton component='label' >
            <AddAPhotoIcon htmlColor="lightgray" />
          <input className="imgUploader" onChange={handleChange}  type="file" hidden />
          </IconButton>
          <IconButton type="submit" onClick={handleSend}>
            <SendIcon htmlColor="lightgray" />
          </IconButton>
        </form>
      </div>

      <div className="messageSender__bottum">
        <Button>
          <VideocamIcon htmlColor="red" />
          <h3>Live Video</h3>
        </Button>
        <Button>
          <PhotoLibraryIcon htmlColor="green" />
          <h3>Photo/Video</h3>
        </Button>
        <Button>
          <SentimentVerySatisfiedIcon htmlColor="orange" />
          <h3>Feeling/Activity</h3>
        </Button>
      </div>
    </div>
  );
};

export default MessageSender;
