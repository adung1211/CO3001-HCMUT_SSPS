import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";

const pages = [
  { text: "Trang chủ", href: "/home" },
  { text: "In", href: "/print" },
  { text: "Mua trang", href: "/home" },
  { text: "Lịch sử", href: "/home" },
];
const settings = [{ text: "Logout", href: "/login" }];

export default function MenuBar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleNav = (pagelink) => {
    navigate(pagelink);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (pagelink) => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ height: "67px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ pl: 5 }}>
            <Button
              onClick={() => handleNav("/home")}
              startIcon={
                <img
                  alt="logo"
                  src={"https://i.imgur.com/4CVmNSg.png"}
                  style={{ height: 50 }}
                />
              }
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "14px",
                }}
                onClick={() => handleNav(page.href)}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, pr: 5 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ pr: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.imgur.com/QOwoGb5.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleNav(setting.href)}>
                  <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
