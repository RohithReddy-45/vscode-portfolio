import { Itheme, darkTheme, lightTheme } from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeContextType = {
  theme: Itheme;
  themePreference: "light" | "dark" | "system";
  toggleTheme: (themePreference: "light" | "dark" | "system") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  themePreference: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme || darkTheme);
  const systemThemePreference = useColorScheme();

  const [themePreference, setThemePreference] = useState<
    "light" | "dark" | "system"
  >("light");

  const toggleTheme = async (
    newThemePreference: "light" | "dark" | "system"
  ) => {
    try {
      let newTheme: Itheme;
      if (newThemePreference === "light") {
        newTheme = lightTheme;
      } else if (newThemePreference === "dark") {
        newTheme = darkTheme;
      } else {
        newTheme = systemThemePreference === "dark" ? darkTheme : lightTheme;
      }
      setThemePreference(newThemePreference);
      setTheme(newTheme);
      await AsyncStorage.setItem("themePreference", newThemePreference);
    } catch (error) {
      console.error("Failed to save the data to the storage", error);
    }
  };

  useEffect(() => {
    const loadTheme = async () => {
      const savedThemePreference = await AsyncStorage.getItem(
        "themePreference"
      );

      if (
        savedThemePreference &&
        savedThemePreference !== "null" &&
        savedThemePreference !== "undefined"
      ) {
        setThemePreference(savedThemePreference as "light" | "dark" | "system");
        if (savedThemePreference === "light") {
          setTheme(lightTheme);
        } else if (savedThemePreference === "dark") {
          setTheme(darkTheme);
        } else {
          setTheme(systemThemePreference === "dark" ? darkTheme : lightTheme);
        }
      } else {
        setThemePreference("system");
        setTheme(systemThemePreference === "dark" ? darkTheme : lightTheme);
      }
    };
    loadTheme();
  }, [systemThemePreference]);

  useEffect(() => {
    if (themePreference === "system") {
      setTheme(systemThemePreference === "dark" ? darkTheme : lightTheme);
    }
  }, [themePreference]);

  return (
    <ThemeContext.Provider value={{ theme, themePreference, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
