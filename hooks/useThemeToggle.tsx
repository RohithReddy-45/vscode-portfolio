import { ThemeContext } from "@/providers/ThemeContext";
import { useContext } from "react";

export const useThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return toggleTheme;
};
