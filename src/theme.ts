import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: baseTheme.colors.blue
  },
  fonts: {
    body: "Inter",
  },
});
