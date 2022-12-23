const drawerWidth = 240;

export default function(theme) {

    const style = { root: {
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
      drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9)
        }
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        // content which is class of main needs to be flex and column direction
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
      },
      paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
      },
      fixedHeight: {
        height: 240
      }
      // added the footer class
      
    }
      return style
}