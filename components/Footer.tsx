import {
  Entypo,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useTheme } from "@/hooks";
import { Text, View } from "./Themed";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <View className="flex-row pt-2 pb-1 px-3 justify-between">
      <View className="flex-row items-center justify-center gap-x-3">
        <View className="flex-row items-center justify-center">
          <MaterialCommunityIcons
            name="source-branch"
            size={16}
            color={theme.colors.highlight}
          />
          <Text
            className="text-xs"
            style={{
              color: theme.colors.highlight,
            }}
          >
            main
          </Text>
        </View>
        <View className="flex-row items-center justify-center">
          <Feather
            name="alert-triangle"
            size={16}
            color={theme.colors.highlight}
          />
          <Text
            className="ml-1 text-xs"
            style={{
              color: theme.colors.highlight,
            }}
          >
            0
          </Text>
        </View>
        <View className="flex-row items-center justify-center">
          <Entypo
            name="circle-with-cross"
            size={16}
            color={theme.colors.highlight}
          />
          <Text
            className="ml-1 text-xs"
            style={{
              color: theme.colors.highlight,
            }}
          >
            0
          </Text>
        </View>
      </View>
      <View className="flex-row items-center justify-center">
        <View className="flex-row items-center justify-center space-x-1">
          <Ionicons
            name="checkmark-done"
            size={16}
            color={theme.colors.highlight}
          />
          <Text
            className="text-xs ml-1"
            style={{
              color: theme.colors.highlight,
            }}
          >
            Prettier
          </Text>
          <EvilIcons
            name="bell"
            size={18}
            color={theme.colors.highlight}
            style={{
              marginBottom: 3,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Footer;
