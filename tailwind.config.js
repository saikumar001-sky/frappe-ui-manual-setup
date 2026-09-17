import frappePreset from "frappe-ui/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [frappePreset],

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#831CF7",
          dark: "#5B16C9",
          light: "#EDE3FF",
        },

        secondary: {
          DEFAULT: "#B435ED",
          light: "#F5EAFE",
        },

        accent: "#7C3AED",

        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#4F46E5",
      },
    },
  },
};
