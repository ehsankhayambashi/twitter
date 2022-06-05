import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import { images } from "../data/data";

function Feed() {
  return (
    <Box flex={4} p={2} sx={{ margin: "0 !important" }}>
      {images.map((image, index) => (
        <Post link={image.link} key={index} />
      ))}
    </Box>
  );
}

export default Feed;
