export const lightColors = {
  dark: false,
  colors: {
    textPrimary: "#008000",
    textSecondary: "#0055FF",
    backgroundDark: "#F3F3F3",
    backgroundLight: "#FFFFFF",
    highlight: "#767676",
    textHighlight: "#3B3B3B",
    border: "#FFFFFF",
    cardBackground: "rgba(243,243,243,1)",
  },
};

export const darkColors = {
  dark: true,
  colors: {
    textPrimary: "#9EFFFF",
    textSecondary: "#FF9D0F",
    backgroundDark: "#131327",
    backgroundLight: "#19182f",
    highlight: "#A599E9",
    textHighlight: "#F9FBFD",
    border: "#FAD000",
    cardBackground: "#343262",
  },
};

const baseTheme = {
  ...lightColors,
};

export type Itheme = typeof baseTheme;
export const lightTheme: Itheme = baseTheme;
export const darkTheme: Itheme = {
  ...baseTheme,
  ...darkColors,
};
