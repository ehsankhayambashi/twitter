import {
  Button,
  Typography,
  styled,
  Box,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { MdSettings } from "react-icons/md";
import { Feed, Navbar, Rightbar, Sidebar } from "./components";
import AddPost from "./components/AddPost";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const myTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={myTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
