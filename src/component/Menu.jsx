import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import WorkIcon from "@mui/icons-material/Work";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import WebIcon from "@mui/icons-material/Web";
import CustomizedSwitches from "./Switch";

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
    <div className={`bg-blue-600 p-2 flex justify-end shadow`}>
      <Box className="flex gap-5 items-center justify-center">
        <div className="hidden md:flex">
          {/* <CustomizedSwitches/> */}
          <Button href="#skill" sx={{ textTransform: "none" }}>
            <Typography
              className={`text-white hover:bg-white hover:text-blue-600 p-1 rounded transition cursor-pointer`}
              id="menuText"
            >
              <CoPresentIcon fontSize="small" /> My Skills
            </Typography>
          </Button>
          <Button href="#work" sx={{ textTransform: "none" }}>
            <Typography
              className={`text-white hover:bg-white hover:text-blue-600 p-1 rounded transition cursor-pointer`}
              id="menuText"
            >
              <WorkIcon fontSize="small" /> Work Experience
            </Typography>
          </Button>
          <Button href="#project" sx={{ textTransform: "none" }}>
            <Typography
              className={`text-white hover:bg-white hover:text-blue-600 p-1 rounded transition cursor-pointer`}
              id="menuText"
            >
              <WebIcon fontSize="small" /> Practice Projects
            </Typography>
          </Button>
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
      </Box>
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CoPresentIcon fontSize="small" />
          </ListItemIcon>
          My Skills
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <WorkIcon fontSize="small" />
          </ListItemIcon>
          Work Experience
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <WebIcon fontSize="small" />
          </ListItemIcon>
          Practice Projects
        </MenuItem>
      </Menu>
    </div>
  );
}
