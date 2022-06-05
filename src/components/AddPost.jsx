import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  MdAdd,
  MdCamera,
  MdDateRange,
  MdEmojiEmotions,
  MdMovie,
  MdPlayArrow,
} from "react-icons/md";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // [theme.breakpoints.down("sm")]:{

  // }
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 28px)", md: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <MdAdd />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width="400px"
          height="280px"
          bgcolor={"background.default"}
          color="text.primary"
          borderRadius={5}
          p={3}
          sx={{ margin: { xs: "10px" } }}
        >
          <Typography variant="h6" textAlign="center" color="gray">
            Create a post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography fontWeight={500} variant="span">
              Jon Doe
            </Typography>
          </UserBox>
          <TextField
            id="outlined-multiline-static"
            label="Write content"
            multiline
            rows={3}
            placeholder="Whats on your mind"
            fullWidth
          />
          <Stack direction="row" mt={2} mb={2} gap={1}>
            <MdEmojiEmotions fontSize={25} color="skyblue" />
            <MdCamera fontSize={25} color="pink" />
            <MdMovie fontSize={25} color="tomato" />
            <MdPlayArrow fontSize={25} color="green" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>One</Button>
            <Button sx={{ width: "20%" }}>
              <MdDateRange size={25} />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
