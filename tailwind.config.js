/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Existing Colors
        customOrange: "#E66932", // Bright orange for accents
        customRed: "#1E3E62",    // Muted, dark blue-red for contrast
        customDarkRed: "#0B192C", // Very dark blue-red for depth
        customBlack: "#000000",   // Pure black for text or strong contrast
        customLightOrange: "#FFA366",   // Soft orange for backgrounds or lighter accents
        customPeach: "#FFD1B3",         // Gentle peach for highlights or soft backgrounds
        customBlueGray: "#2A516A",      // Muted blue-gray to complement customRed
        customSlateGray: "#4C7080",     // Soft grayish blue, great for secondary text
        customOffWhite: "#F5F5F5",      // Light neutral for background
        customWarmGray: "#B0B0B0",      // Warm gray for subtle elements like borders
        customLightGray: "#E0E0E0",     // Very light gray for cards or input fields
        customDarkGray: "#333333",      // Dark gray for headings or strong contrasts
        customGold: "#FFD700",          // Bold gold for a touch of elegance and highlights
        customTeal: "#008080",          // Teal for a refreshing contrast
      },
      fontFamily: {
        doto: ["Doto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};
