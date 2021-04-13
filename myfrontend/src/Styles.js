import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles((props) => ({
  container: {
    backgroundColor: props.palette.background.paper,
    padding: props.spacing(8, 0, 6),
  },

  navTitle: {
    flexGrow: 1,
  },
  icon: {
    marginRight: "20px",
  },

  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // aspect ratio of 16:9
  },
  cardContent: {
    flexGrow: "1",
  },

  footer: {
    backgroundColor: props.palette.background.paper,
    padding: "50px 0",
  },
  searchIcon: {
    padding: props.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  search: {
    position: "relative",
    borderRadius: props.shape.borderRadius,
    backgroundColor: fade(props.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(props.palette.common.white, 0.25),
    },
    marginRight: props.spacing(2),
    marginLeft: 0,
    width: "100%",
    [props.breakpoints.up("sm")]: {
      marginLeft: props.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: props.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${props.spacing(4)}px)`,
    transition: props.transitions.create("width"),
    width: "100%",
    [props.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export { useStyles };
