import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Post from "components/Post";

const Feed = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://picsum.photos/v2/list?page=2&limit=20");
      const posts = await data.json();
      setPost(posts);
      console.log(post);
    };
    fetchData();
  }, []);

  return (
    <Box flex={4} p={2}>
      {post &&
        post.map((post) => <Post key={post.id} author={post.author} image={post.url} />)}
    </Box>
  );
};

export default Feed;
