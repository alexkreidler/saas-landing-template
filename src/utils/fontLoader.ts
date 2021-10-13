
const makeFullFont = (font: string) =>
`family=${font}:wght@200;300;400;500;600;700;800`


export const usualFonts = [
    // Geometrics
    "Rubik",
    "Manrope",
    "Poppins",
    "DM Sans",
    "Work Sans",
    "Montserrat",
    // more straight
    "Inter",
    // "Heebo",
    "Karla",
    "Archivo",
    // "Arimo",
    // serifs
    "Merriweather",
  ]

export const makeGoogleFontsURL = (fontFamilies: string[] = usualFonts) =>
`https://fonts.googleapis.com/css2?${makeFullFont(
  fontFamilies[0]
)}${
  fontFamilies.length > 1
    ? fontFamilies
        .slice(1)
        .map((f) => "&" + makeFullFont(f))
        .join("")
    : ""
}&display=swap`
