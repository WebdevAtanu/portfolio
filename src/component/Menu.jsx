import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import WorkIcon from "@mui/icons-material/Work";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import WebIcon from "@mui/icons-material/Web";
import CustomizedSwitches from "./Switch";
import { Link, Element } from "react-scroll";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={`bg-blue-600 p-2 flex justify-end shadow sticky top-0`}>
      <div className="hidden md:flex gap-4">
        <Link to="playground" smooth={true} duration={500}>
          <Typography
            className={`text-white hover:bg-white hover:text-blue-600 p-1 rounded transition cursor-pointer`}
            id="menuText"
          >
            {" "}
            My Playground
          </Typography>
        </Link>

        <Link to="skill" smooth={true} duration={500}>
          <Typography
            className={`text-white hover:bg-white hover:text-blue-600 p-1 rounded transition cursor-pointer`}
            id="menuText"
          >
            {" "}
            My Skills
          </Typography>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <Typography
            className={`text-white hover:bg-white hover:text-blue-600 p-1 rounded transition cursor-pointer`}
            id="menuText"
          >
            {" "}
            Work Experience
          </Typography>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <Typography
            className={`text-white hover:bg-white hover:text-blue-600 p-1 rounded transition cursor-pointer`}
            id="menuText"
          >
            {" "}
            Practice Projects
          </Typography>
        </Link>
      </div>
      <div className="md:hidden">
        <Tooltip title="Atanu Mondal">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </IconButton>
        </Tooltip>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="playground" smooth={true} duration={500}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <CoPresentIcon fontSize="small" />
            </ListItemIcon>
            My Playground
          </MenuItem>
        </Link>
        <Link to="skill" smooth={true} duration={500}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <CoPresentIcon fontSize="small" />
            </ListItemIcon>
            My Skills
          </MenuItem>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <WorkIcon fontSize="small" />
            </ListItemIcon>
            Work Experience
          </MenuItem>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <WebIcon fontSize="small" />
            </ListItemIcon>
            Practice Projects
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
