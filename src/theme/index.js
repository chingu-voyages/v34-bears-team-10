import { createTheme } from "@mui/material/styles";

/**
 * Customized Material UI themes for "light" and "dark" modes.
 *
 * @see https://next.material-ui.com/customization/default-theme/
 */
const themeGenerator = ["light", "dark"].map((mode) =>
  createTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: [
        `"Roboto"`,
        `"Segoe UI"`,
        `"Oxygen"`,
        `"Ubuntu"`,
        `"Cantarell"`,
        `"Fira Sans"`,
        `"Droid Sans"`,
        `"Helvetica Neue"`,
        `sans-serif`,
      ].join(","),
    },
  })
);

export default {
  light: themeGenerator[0],
  dark: themeGenerator[1],
};
