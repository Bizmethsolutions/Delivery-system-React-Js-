



import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { useNavigate } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    width: '100%',
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    //padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    background: "#464775"
  },
  appBarSpacer: theme.mixins.toolbar
}));
export default function Header(props) {
  let navigate = useNavigate (); 
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfile = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <React.Fragment>
    <AppBar
    position="absolute"
    className={clsx(classes.appBar, open && classes.appBarShift)}
  >
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            //onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {props.heading}
          </Typography>
          <div className="ml-auto">
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={logout}>
              <img src="/images/logout.png" width="22px" />
            </IconButton>
            <IconButton 
              color="inherit" 
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={openProfile ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openProfile ? 'true' : undefined}
              >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </div>
        </Toolbar>
        </AppBar>
          <Menu
          anchorEl={anchorEl}
          id="account-menu"
          className="profile-menu"
          open={openProfile}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        
        </React.Fragment>
  );
}
