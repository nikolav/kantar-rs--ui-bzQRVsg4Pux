import { type ThemeDefinition } from "vuetify";
// import colorsVuetify from "vuetify/util/colors";
import chroma from "chroma-js";
import { THEME_ACCENT_SHIFT } from "@/config";

// const primary = colorsVuetify.blueGrey.darken3; // "#37474F"
const primary = "0F5359"; // "#37474F"
// primary => accent1, accent2, complement

const primary2 = "C1DFD4";
const primary3 = "FFD21F";
const secondary = "333F40";

const pHsla = chroma(primary).hsl();
const hueShift = (amount: number) => (n: number, i: number) =>
  0 !== i ? n : n + amount;

const nAccent1 = pHsla.map(hueShift(THEME_ACCENT_SHIFT));
const accent1 = chroma
  .hsl(nAccent1[0], nAccent1[1], nAccent1[2], nAccent1[3])
  .hex();

const nAccent2 = pHsla.map(hueShift(-THEME_ACCENT_SHIFT));
const accent2 = chroma
  .hsl(nAccent2[0], nAccent2[1], nAccent2[2], nAccent2[3])
  .hex();

const nComplement = pHsla.map(hueShift(-180));
const complement = chroma
  .hsl(nComplement[0], nComplement[1], nComplement[2], nComplement[3])
  .hex();

export const light2: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary,
    // secondary: "#e2e2e2",
    secondary,
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    //
    accent1,
    accent2,
    complement,
    //
    primary2,
    primary3,
  },
  // variables: {
  //   "border-color": "#000000",
  //   "border-opacity": 0.12,
  //   "high-emphasis-opacity": 0.87,
  //   "medium-emphasis-opacity": 0.6,
  //   "disabled-opacity": 0.38,
  //   "idle-opacity": 0.04,
  //   "hover-opacity": 0.04,
  //   "focus-opacity": 0.12,
  //   "selected-opacity": 0.08,
  //   "activated-opacity": 0.12,
  //   "pressed-opacity": 0.12,
  //   "dragged-opacity": 0.08,
  //   "theme-kbd": "#212529",
  //   "theme-on-kbd": "#FFFFFF",
  //   "theme-code": "#F5F5F5",
  //   "theme-on-code": "#000000",
  // },
};
