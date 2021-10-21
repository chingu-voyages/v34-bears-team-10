import { createTheme } from "@mui/material/styles";

import { darkSchema, lightSchema } from "./schemas";

/**
 * Customized Material UI themes for "light" and "dark" modes.
 *
 * @see https://next.material-ui.com/customization/default-theme/
 */
const customTheme = ["light", "dark"].map((mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light" ? lightSchema : darkSchema),
    },
    typography: {
      fontFamily: [
        '"Roboto"',
        '"Segoe UI"',
        '"Oxygen"',
        '"Ubuntu"',
        '"Cantarell"',
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue"',
        "sans-serif",
      ].join(","),
    },
    breakpoints: {
      values: {
        xs: 480,
        sm: 620,
        md: 768,
        lg: 980,
        xl: 1280,
        "2xl": 1536,
      },
    },
  })
);

export default {
  light: customTheme[0],
  dark: customTheme[1],
};
