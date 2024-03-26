"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material";

const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

const darkThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#0091d8",
      light: "#40a8de",
      contrastText: "#fff",
    },
    secondary: {
      main: "#292929",
      contrastText: "#fff",
    },
    error: {
      main: "#ff0004",
      contrastText: "#ff0004",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: "#fff",
      hint: "#fff",
      icon: "#fff",
    },
    background: {
      default: "#202020",
      paper: "#1c1c1c",
      contrastText: "#fff",
    },
  },
  typography: {
    error: {
      color: "#ff0004",
    },
    fontFamily: roboto.style.fontFamily,
  },
};

const theme = createTheme(darkThemeOptions);
export { theme };
