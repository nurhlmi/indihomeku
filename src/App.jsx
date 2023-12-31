import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Router from "./routes";

export default function App() {
   let theme = createTheme({
      palette: {
         primary: {
            light: "#63ccff",
            main: "#005267",
            dark: "#005267",
         },
         error: {
            main: "#ea0d2a",
         },
      },
      typography: {
         fontFamily: `"Inter", sans-serif`,
         h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
         },
      },
      shape: {
         borderRadius: 20,
      },
      components: {
         MuiTab: {
            defaultProps: {
               disableRipple: true,
            },
         },
      },
      mixins: {
         toolbar: {
            minHeight: 48,
         },
      },
   });

   theme = {
      ...theme,
      components: {
         MuiDrawer: {
            styleOverrides: {
               paper: {
                  background: "#fff",
               },
            },
         },
         MuiButton: {
            styleOverrides: {
               root: {
                  textTransform: "none",
               },
               contained: {
                  boxShadow: "none",
                  "&:active": {
                     boxShadow: "none",
                  },
               },
            },
         },
         MuiTabs: {
            styleOverrides: {
               root: {
                  marginLeft: theme.spacing(1),
               },
               indicator: {
                  height: 3,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  backgroundColor: theme.palette.common.white,
               },
            },
         },
         MuiTab: {
            styleOverrides: {
               root: {
                  textTransform: "none",
                  margin: "0 16px",
                  minWidth: 0,
                  padding: 0,
                  [theme.breakpoints.up("md")]: {
                     padding: 0,
                     minWidth: 0,
                  },
               },
            },
         },
         MuiIconButton: {
            styleOverrides: {
               root: {
                  padding: theme.spacing(1),
               },
            },
         },
         MuiTooltip: {
            styleOverrides: {
               tooltip: {
                  borderRadius: 4,
               },
            },
         },
         MuiDivider: {
            styleOverrides: {
               root: {
                  backgroundColor: "rgb(255,255,255,0.15)",
               },
            },
         },
         MuiListItemButton: {
            styleOverrides: {
               root: {
                  color: "#424242",
                  paddingLeft: 22,
                  paddingRight: 22,
               },
            },
         },
         MuiListItemText: {
            styleOverrides: {
               primary: {
                  fontSize: 14,
                  fontWeight: theme.typography.fontWeightMedium,
               },
            },
         },
         MuiListItemIcon: {
            styleOverrides: {
               root: {
                  color: "inherit",
                  minWidth: "auto",
                  marginRight: theme.spacing(2),
                  "& svg": {
                     fontSize: 20,
                  },
               },
            },
         },
         MuiAvatar: {
            styleOverrides: {
               root: {
                  width: 32,
                  height: 32,
               },
            },
         },
      },
   };
   return (
      <ThemeProvider theme={theme}>
         <Router />
      </ThemeProvider>
   );
}
