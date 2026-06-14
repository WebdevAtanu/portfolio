import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import WorkIcon from "@mui/icons-material/Work";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import WebIcon from "@mui/icons-material/Web";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";
import ThemeSwitch from "./Switch";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { blue } from "@mui/material/colors";
import { Link } from "react-scroll";

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
    <div className="site-nav sticky top-0 z-50">
      <Link to="intro" smooth={true} duration={500}>
        <button className="brand-mark" type="button" aria-label="Go to intro">
          AM
        </button>
      </Link>
      <div className="hidden md:flex items-center gap-2">
        <Link to="playground" smooth={true} duration={500}>
          <Typography className="nav-link" id="menuText">
            Playground
          </Typography>
        </Link>

        <Link to="skill" smooth={true} duration={500}>
          <Typography className="nav-link" id="menuText">
            Skills
          </Typography>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <Typography className="nav-link" id="menuText">
            Experience
          </Typography>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <Typography className="nav-link" id="menuText">
            Projects
          </Typography>
        </Link>
        <Link to="freelance" smooth={true} duration={500}>
          <Typography className="nav-link" id="menuText">
            Freelance
          </Typography>
        </Link>
        <ThemeSwitch />
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
            <Avatar sx={{ bgcolor: blue[500] }}>
              <WidgetsIcon />
            </Avatar>
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
              <LaptopMacIcon fontSize="small" />
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
              <CodeIcon fontSize="small" />
            </ListItemIcon>
            Practice Projects
          </MenuItem>
        </Link>
        <Link to="freelance" smooth={true} duration={500}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <WebIcon fontSize="small" />
            </ListItemIcon>
            Freelance Demo
          </MenuItem>
        </Link>
        <div className="px-2">
          <ThemeSwitch />
        </div>
      </Menu>
    </div>
  );
}
