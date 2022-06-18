import { Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Mui
        </Typography>
        <Pets sx={{ display: { xs: "blcok", sm: "none" } }} />

        <Search>
          <InputBase placeholder='search...' fullWidth={true} />
        </Search>

        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>

          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            alt='Remy Sharp'
            src='https://sani2608.github.io/ReactDashboard/static/media/avatar.3854afe5a9918b581597.jpg'
            sx={{ width: 30, height: 30, "&:hover": { cursor: "pointer" } }}
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            alt='Remy Sharp'
            src='https://sani2608.github.io/ReactDashboard/static/media/avatar.3854afe5a9918b581597.jpg'
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant='span'>sani</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        onClose={handleClose}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
