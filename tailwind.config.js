/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      Roboto: ['"Roboto Condensed"', ..._fontFamily.sans],
    },
  },
};
export const plugins = [];
