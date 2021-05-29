import Pusher from 'pusher'
import mongoose from 'mongoose'

const pusher = new Pusher({
    appId: "1208219",
    key: "67b0ff49cf4886f490dd",
    secret: "16cffb2b2508fbebeb60",
    cluster: "ap2",
    useTLS: true
  });

  //pusher config for realtime database  {posts is the mongodb collection name use as it is}
const db = mongoose.connection

db.once('open',()=>{
    console.log("DB Connected");

    const postCollection = db.collection("posts")
    const changeStream = postCollection.watch()

    changeStream.on('change',(change)=>{
        console.log(change);

        if (change.operationType === "insert") {
            
            console.log("Triggering Pusher")
            pusher.trigger("posts","inserted",{
                change: change
            })
        }
        else{
            console.log("Error in triggering Pusher");
        }
    })
    const messageCollection = db.collection("messages")
    const changeStreamForMessage = messageCollection.watch()

    changeStreamForMessage.on('change',(change)=>{
        console.log(change);

        if (change.operationType === "insert") {
            
            console.log("Triggering Pusher")
            pusher.trigger("messages","inserted",{
                change: change
            })
        }
        else{
            console.log("Error in triggering Pusher");
        }
    })

})