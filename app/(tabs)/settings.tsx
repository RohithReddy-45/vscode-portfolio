import { Text, View } from "@/components/Themed";
import { useTheme } from "@/hooks";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";

const Settings = () => {
  const { theme, themePreference, toggleTheme } = useTheme();

  const isLight = themePreference === "light";
  const isDark = themePreference === "dark";
  const isSystem = themePreference === "system";

  const [isLightChecked, setLightChecked] = useState(isLight);
  const [isDarkChecked, setDarkChecked] = useState(isDark);
  const [isSystemChecked, setSystemChecked] = useState(isSystem);

  useEffect(() => {
    setLightChecked(isLight);
    setDarkChecked(isDark);
    setSystemChecked(isSystem);
  }, [themePreference]);

  const handleLightModePress = () => {
    if (!isLightChecked) {
      setLightChecked(true);
      setDarkChecked(false);
      setSystemChecked(false);
      toggleTheme("light");
    }
  };

  const handleDarkModePress = () => {
    if (!isDarkChecked) {
      setLightChecked(false);
      setDarkChecked(true);
      setSystemChecked(false);
      toggleTheme("dark");
    }
  };

  const handleSystemModePress = () => {
    if (!isSystemChecked) {
      setSystemChecked(true);
      toggleTheme("system");
    }
  };

  return (
    <View
      className="flex-1 py-2 px-5 space-y-5"
      style={{
        backgroundColor: theme.colors.backgroundLight,
      }}
    >
      <Pressable
        className="mt-2 flex-row items-center justify-between rounded-full py-3 px-6"
        style={{
          backgroundColor: theme.colors.cardBackground,
        }}
        onPress={() => {
          handleLightModePress();
        }}
      >
        <View className="flex-row items-center gap-x-3">
          <Entypo name="light-up" size={18} color={theme.colors.textPrimary} />
          <Text
            style={{
              color: theme.colors.textPrimary,
            }}
          >
            Light mode
          </Text>
        </View>
        <Checkbox
          value={isLightChecked}
          onValueChange={(newValue) => {
            handleLightModePress();
          }}
          color={isLightChecked ? theme.colors.textSecondary : undefined}
        />
      </Pressable>
      <Pressable
        className="mt-2 flex-row items-center justify-between rounded-full py-3 px-6"
        onPress={() => {
          handleDarkModePress();
        }}
        style={{
          backgroundColor: theme.colors.cardBackground,
        }}
      >
        <View className="flex-row items-center gap-x-3">
          <MaterialIcons
            name="dark-mode"
            size={18}
            color={theme.colors.textPrimary}
          />
          <Text
            style={{
              color: theme.colors.textPrimary,
            }}
          >
            Dark mode
          </Text>
        </View>
        <Checkbox
          value={isDarkChecked}
          onValueChange={(newValue) => {
            handleDarkModePress();
          }}
          color={isDarkChecked ? theme.colors.textSecondary : undefined}
        />
      </Pressable>

      <Pressable
        className="mt-2 flex-row items-center justify-between rounded-full py-3 px-6"
        onPress={() => {
          handleSystemModePress();
        }}
        style={{
          backgroundColor: theme.colors.cardBackground,
        }}
      >
        <View className="flex-row items-center gap-x-3">
          <FontAwesome
            name="laptop"
            size={18}
            color={theme.colors.textPrimary}
          />
          <Text
            style={{
              color: theme.colors.textPrimary,
            }}
          >
            System mode
          </Text>
        </View>
        <Checkbox
          value={isSystemChecked}
          onValueChange={(newValue) => {
            handleSystemModePress();
          }}
          color={isSystemChecked ? theme.colors.textSecondary : undefined}
        />
      </Pressable>
    </View>
  );
};

export default Settings;
