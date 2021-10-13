import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { usualFonts } from "./utils/fontLoader";

const font = "DM Sans"//"Circular Std" //usualFonts[10] //"Inter",
export const theme = extendTheme({
  colors: {
    brand: baseTheme.colors.purple
  },
  fonts: {
    heading: font,
    body: font,
  },
});
