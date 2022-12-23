import React from "react";
import clsx from "clsx";
import _ from 'lodash';
import moment from 'moment';
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaperIcons: {
    position: "relative",
    whiteSpace: "nowrap",
    width: 120,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperInfo: {
    position: "relative",
    whiteSpace: "nowrap",
    background: "#f8f8f8",
    width: 'auto',
    minWidth: 300,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

export default function SideNavigation(props) {
  let location = useLocation(); 
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  console.log(props, 'ppppppppppp', location)

  return (
    <div className="d-inline-flex divider-maindiv">
        <Drawer
        variant="permanent"
        classes={{
        paper: clsx(classes.drawerPaperIcons)
        }}
        open={true}
    >
        {/* <div className={classes.toolbarIcon}>
        </div> */}
        
            <List className="icon-list">
                <ListItem className={location.pathname === "/home" ? "icon-list-item icon-list-active" : "icon-list-item"} button>
                    <Link to="/home" ><span>
                    <ListItemIcon className="list-icon">
                    <span><DashboardIcon /></span>
                    </ListItemIcon>
                    <ListItemText primary="Home" className="icon-text"/>
                    </span></Link>
                </ListItem>
                <ListItem className={location.pathname === "/tenders" ? "icon-list-item icon-list-active" : "icon-list-item"} button>
                    <Link to="/tenders" ><span>
                    <ListItemIcon className="list-icon">
                    <span>  <ShoppingCartIcon className="icon-text"/></span>
                    </ListItemIcon>
                    <ListItemText primary="All tenders" />
                    </span></Link>
                </ListItem>
                <ListItem className={location.pathname === "/mytender" ? "icon-list-item icon-list-active" : "icon-list-item"} button>
                <span>
                    <ListItemIcon className="list-icon">
                    <span>   <PeopleIcon className="icon-text" /></span>
                    </ListItemIcon>
                    <ListItemText primary="My tenders" />
                    </span>
                </ListItem>
                <ListItem className={location.pathname === "/graphs" ? "icon-list-item icon-list-active" : "icon-list-item"} button>
                <span>
                    <ListItemIcon className="list-icon">
                    <span>  <BarChartIcon className="icon-text" /></span>
                    </ListItemIcon>
                    <ListItemText primary="Graphs" />
                    </span>
                </ListItem>
                <ListItem className={location.pathname === "/map" ? "icon-list-item icon-list-active" : "icon-list-item"} button>
                <span>
                    <ListItemIcon className="list-icon">
                    <span>  <LayersIcon className="icon-text" /></span>
                    </ListItemIcon>
                    <ListItemText primary="Map view" />
                    </span>
                </ListItem>
                <ListItem className={location.pathname === "/reports" ? "icon-list-item icon-list-active" : "icon-list-item"} button>
                <span>
                    <ListItemIcon className="list-icon">
                    <span>   <LayersIcon className="icon-text" /></span>
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                    </span>
                </ListItem>
                <Divider/>
                <ListItem className={location.pathname === "/settings" ? "icon-list-item icon-list-active" : "icon-list-item"} button>
                <span>
                    <ListItemIcon className="list-icon">
                    <span>  <LayersIcon className="icon-text" /></span>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </span>
                </ListItem>
            </List>
       
    </Drawer>
    {props && props.tenders && <Drawer
        variant="permanent"
        classes={{
        paper: clsx(classes.drawerPaperInfo)
        }}
        open={true}
    >
      {props.tenders.length !==0 && props.tenders.map((tender, i) => {
        return (
        <div class="p-2   bg-white rounded tender-list-div">
              <div class="container">
                <div class="row">
                  <div className="col-10">
                  <div class="row pb-3">
                      <div class="col-2 rfx-text">
                        RFx:{tender.rfxid}
                      </div>
                      <div class="col-4 rfx-text">
                        Reference: {tender.reference}
                      </div>
                      <div class="col-6 rfx-text">
                        Open date: {moment(tender.created_at).format('Do MMM YYYY hh:mm A')}
                        <br/>Close date: {moment(tender.close_date).format('Do MMM YYYY hh:mm A')}
                      </div>
                    </div>
                    <div class="row"><div className="col-12 pb-1 d-inline-flex"><span className="org-head pr-1">Organisation:</span><span className="details-text">{_.get(tender, 'organisation.organisation_name', '')}</span></div></div>
                    <div class="row"><div className="col-12 pb-1 d-inline-flex"><span className="org-head pr-1">Tender Name:</span><span className="details-text">{_.get(tender, 'name', '')}</span></div></div>
                  </div>
                  <div className="col-2 three-dots">
                    <MoreVertIcon/>
                  </div>
                  </div>
                  </div>
                </div>
        )
      })
    }
          {/* <ol className="list-group list-group-light list-group-numbered">
              {props.tenders.length !==0 && props.tenders.map((organisation, i) => {
                return (
                // <ListItem key={i} button>
                //   <ListItemText primary={tender.name} />
                // </ListItem>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="d-flex"><AssignmentIcon /><div className="fw-bold ms-3">{organisation.name}</div></div>
                    <ul className="tender-list">
                      {organisation.data.length !==0 && organisation.data.map((ten, i) => {
                        return (
                            <li>{ten.name}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <span className="badge badge-primary rounded-pill">{organisation.data.length}</span>
                </li>
                )
              })}
              <li className="list-group-item d-flex justify-content-between align-items-start">
                
                  
              </li>
            </ol> */}
            
                <div class="shadow-lg p-3 mb-2 mt-3 bg-white rounded">
              <div class="container">
                <div class="row">
                  <div className="col-10">
                  <div class="row">
                      <div class="col">
                        1 of 3
                      </div>
                      <div class="col">
                        3 of 3
                      </div>
                      <div class="col-6">
                        2 of 3 (wider)
                        <br/>H2 or 3
                      </div>
                    </div>
                    <div class="row"> <div className="col-12">Helloooo</div></div>
                    <div class="row"> <div className="col-12">Helloooo</div></div>
                  </div>
                  <div className="col-2">
                    <MoreVertIcon/>
                  </div>
                  </div>
                  </div>
                </div>
    </Drawer> }
  </div>
  );
}
