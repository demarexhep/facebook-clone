import React, { useEffect, useState } from "react";
import "./Feed.css";
import Story from "./Story";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <Story />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profileImage={post.data.profileImage}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
