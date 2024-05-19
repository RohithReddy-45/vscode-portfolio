import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

import { View } from "@/components/Themed";
import { useTheme } from "@/hooks";
import { useFocus } from "@/providers/FocusProvider";

type SidebarProps = {
  handleFocus: (name: string) => void;
};

const Sidebar = ({ handleFocus }: SidebarProps) => {
  const { theme } = useTheme();
  const { focused } = useFocus();
  const router = useRouter();

  return (
    <View className="h-full w-12 py-2 px-2 items-center justify-between">
      <View className="space-y-5">
        <Pressable
          onPress={() => {
            handleFocus("welcome");
            router.replace("/");
          }}
        >
          <MaterialCommunityIcons
            name="file-multiple-outline"
            size={25}
            color={
              focused === "welcome"
                ? theme.colors.textHighlight
                : theme.colors.highlight
            }
          />
        </Pressable>
        <Pressable
          onPress={() => {
            handleFocus("github");
            router.replace("/github");
          }}
        >
          <Feather
            name="github"
            size={26}
            color={
              focused === "github"
                ? theme.colors.textHighlight
                : theme.colors.highlight
            }
          />
        </Pressable>
        <Pressable
          onPress={() => {
            handleFocus("projects");
            router.replace("/projects");
          }}
        >
          <FontAwesome
            name="code"
            size={26}
            color={
              focused === "projects"
                ? theme.colors.textHighlight
                : theme.colors.highlight
            }
          />
        </Pressable>
        <Pressable
          onPress={() => {
            handleFocus("skills");
            router.replace("/skills");
          }}
        >
          <MaterialCommunityIcons
            name="toolbox-outline"
            size={26}
            color={
              focused === "skills"
                ? theme.colors.textHighlight
                : theme.colors.highlight
            }
          />
        </Pressable>
        <Pressable
          onPress={() => {
            handleFocus("contact");
            router.replace("/contact");
          }}
        >
          <Feather
            name="mail"
            size={26}
            color={
              focused === "contact"
                ? theme.colors.textHighlight
                : theme.colors.highlight
            }
          />
        </Pressable>
      </View>
      <View className="space-y-5">
        <Pressable
          onPress={() => {
            handleFocus("about");
            router.replace("/about");
          }}
        >
          <FontAwesome6
            name="circle-user"
            size={26}
            color={
              focused === "about"
                ? theme.colors.textHighlight
                : theme.colors.highlight
            }
          />
        </Pressable>
        <Pressable
          onPress={() => {
            handleFocus("settings");
            router.replace("/settings");
          }}
        >
          <SimpleLineIcons
            name="settings"
            size={26}
            color={
              focused === "settings"
                ? theme.colors.textHighlight
                : theme.colors.highlight
            }
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Sidebar;
