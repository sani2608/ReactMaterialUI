import React, { useEffect, useState } from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import Post from "components/Post";

const Feed = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);

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
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant='text' height={100} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='rectangular' height={300} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='rectangular' height={300} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='rectangular' height={300} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='rectangular' height={300} />
        </Stack>
      ) : (
        <>
          {post &&
            post.map((post) => (
              <Post key={post.id} author={post.author} image={post.url} />
            ))}
        </>
      )}
    </Box>
  );
};

export default Feed;
