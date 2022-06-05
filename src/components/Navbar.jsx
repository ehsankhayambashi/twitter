import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  alpha,
  InputBase,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import {
  MdSearch,
  MdMail,
  MdNotifications,
  MdAccountCircle,
  MdMoreVert,
} from "react-icons/md";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar() {
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const [moreIconAnchor, setMoreIconAnchor] = useState(null);
  const openMoreIcone = (event) => {
    setMoreIconAnchor(event.currentTarget);
  };
  const closeMoreIcon = () => {
    setMoreIconAnchor(null);
  };
  const opneProfileMenu = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const closeProfileMenu = (event) => {
    setProfileMenuAnchor(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ display: { xs: "flex", sm: "none" }, marginRight: "2px" }}>
          <BsTwitter />
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Box sx={{ display: "flex" }} alignItems="center">
            <BsTwitter style={{ marginRight: "2px" }} />
            Twitter
          </Box>
        </Typography>
        <Search>
          <SearchIconWrapper>
            <MdSearch />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" />
        </Search>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="show 4 new mails"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
          >
            <Badge badgeContent={4} color="error">
              <MdMail />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            aria-label="show 17 new notifications"
          >
            <Badge badgeContent={17} color="error">
              <MdNotifications />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit" onClick={opneProfileMenu}>
            <MdAccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" color="inherit" onClick={openMoreIcone}>
            <MdMoreVert />
          </IconButton>
        </Box>
      </StyledToolbar>
      <Menu
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={profileMenuAnchor}
        id={mobileMenuId}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(profileMenuAnchor)}
        onClose={closeProfileMenu}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
      </Menu>
      <Menu
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        anchorEl={moreIconAnchor}
        id="more-icon-mobile"
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        open={Boolean(moreIconAnchor)}
        onClose={closeMoreIcon}
      >
        <MenuItem>
          <IconButton
            size="large"
            color="inherit"
            aria-label="show 4 new mails"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
          >
            <Badge badgeContent={4} color="error">
              <MdMail />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            color="inherit"
            aria-label="show 17 new notifications"
          >
            <Badge badgeContent={17} color="error">
              <MdNotifications />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={opneProfileMenu}>
          <IconButton size="large" color="inherit">
            <MdAccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
