// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false, //false means color mode can only be changed via the useColorMode hook.
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
