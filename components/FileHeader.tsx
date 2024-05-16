import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable } from "react-native";

import { Text } from "@/components/Themed";
import { useTheme } from "@/hooks";
import { FileHeaderProps } from "@/types/types";

const FileHeader = ({
  fileName,
  icon,
  focused,
  setFocused,
}: FileHeaderProps) => {
  const { theme } = useTheme();
  const route = fileName.split(".")[0];
  const handleFilePress = (fileName: string) => {
    if (route === "welcome") {
      router.replace("/");
      setFocused("welcome");
    } else {
      router.navigate(`/${route}`);
      setFocused(fileName.split(".")[0]);
    }
  };
  return (
    <Pressable
      className="flex-row gap-2 items-center justify-center px-1 h-10"
      style={{
        backgroundColor:
          route === focused
            ? theme.colors.backgroundLight
            : theme.colors.backgroundDark,
        borderBottomColor: theme.colors.border,
        borderBottomWidth: route === focused ? 1 : 0,
      }}
      onPress={() => {
        setFocused(route);
        handleFilePress(fileName);
      }}
    >
      <Image
        source={icon}
        alt={`${fileName} file icon`}
        style={{
          width: 14,
          height: 14,
        }}
      />
      <Text style={{ color: theme.colors.textPrimary }} className="italic">
        {fileName}
      </Text>

      <Feather
        name="x"
        size={16}
        color={theme.colors.textHighlight}
        style={{
          paddingRight: 5,
        }}
      />
    </Pressable>
  );
};

export default FileHeader;
