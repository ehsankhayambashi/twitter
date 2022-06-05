import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { imageGallery } from "../data/data";
import { avatars } from "../data/data";

function Rightbar() {
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", md: "block" },
        margin: "0 !important",
      }}
      pt={1}
    >
      <Box width="330px" position="fixed" overflow="auto" height="90vh">
        <Box mb={1}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7} sx={{ justifyContent: "start" }}>
            {avatars.map((avatar, index) => (
              <Avatar alt={avatar.alt} src={avatar.src} key={index} />
            ))}
          </AvatarGroup>
        </Box>
        <Box mb={1}>
          <Typography variant="h6" fontWeight={100}>
            Latest Photos
          </Typography>
          <ImageList
            cols={3}
            rowHeight={100}
            gap={5}
            sx={{ marginTop: "3px", marginBottom: "0" }}
          >
            {imageGallery.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item.img} alt={item.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box mb={1}>
          <Typography variant="h6" fontWeight={100}>
            Latest Conversations
          </Typography>
          {/* <Box overflow="auto" height="300px"> */}
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default Rightbar;
