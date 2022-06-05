import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdMoreVert,
  MdShare,
} from "react-icons/md";

function Post({ link }) {
  const [loading, setLoading] = useState(true);

  return (
    <Card sx={{ marginBottom: "1rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MdMoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      {loading ? (
        <Skeleton variant="rectangular" height={300} />
      ) : (
        <CardMedia
          onLoad={() => setLoading(false)}
          component="img"
          height="20%"
          image={link}
          alt="Paella dish"
        />
      )}
      <CardMedia
        onLoad={() => setLoading(false)}
        component="img"
        height="20%"
        image={link}
        alt="Paella dish"
        sx={{ display: "none" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<MdFavoriteBorder />}
            checkedIcon={<MdFavorite color="red" />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <MdShare />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
