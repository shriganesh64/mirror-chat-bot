export default (theme) => ({
  container: {
    minHeight: "inherit",
  },
  basePadding: {
    padding: 8,
  },
  paper: {
    padding: 16,
    height: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  halfWidth: {
    width: "50%",
  },
  chatRowHolder: {
    maxHeight: "80vh",
    overflowY: "auto",
    scrollBehavior: "smooth",
  },
  chatContainer: {
    display: "flex",
    height: "80vh",
    width: "45%",
    padding: 0,
    flexDirection: "column",
  },
  chatHeader: {
    padding: `8px 24px`,
  },
  chatHeaderAvatar: {
    backgroundColor: theme.palette.primary.main,
  },
  chatHolder: {
    overflowY: "auto",
    flex: 1,
    padding: `8px 24px`,
    boxShadow: "none",
    scrollBehavior: "smooth",
  },
  messageContainer: {
    padding: 8,
    minWidth: "5rem",
  },
  whiteColor: {
    color: theme.palette.common.white,
  },
  baseTransition: {
    transition: theme.transitions.create(["color"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  sendButton: {
    "&:disabled": {
      color: theme.palette.text.disabled,
    },
  },
  relative: {
    position: "relative",
  },
});
