import { useRouter } from "expo-router";

import Button from "@/components/Button";
import { Text, View } from "@/components/Themed";
import Vscodebg from "@/components/Vscodebg";
import { useTheme } from "@/hooks";
import { useFocus } from "@/providers/FocusProvider";

const Welcome = () => {
  const { theme } = useTheme();
  const isDark = theme.dark;
  const router = useRouter();
  const { handleFocus } = useFocus();

  return (
    <View
      className="items-center px-6 py-4"
      style={{
        backgroundColor: theme.colors.backgroundLight,
        flex: 1,
      }}
    >
      <View className="bg-transparent absolute w-full h-full items-center justify-center">
        <Vscodebg fill={isDark ? "#000" : "#F3F3F3"} />
      </View>
      <Text
        className="text-xl font-medium text-center"
        style={{
          color: theme.colors.textPrimary,
        }}
      >
        Hey, I'm Rohith reddy.
      </Text>
      <Text
        style={{
          color: theme.colors.textPrimary,
        }}
        className="text-base text-center"
      >
        A Frontend developer from India.
      </Text>
      <View className="items-center space-y-5 px-12 w-full mt-6">
        <Button
          textStyle={{
            color: "white",
            fontWeight: "500",
            textAlign: "center",
          }}
          onPress={() => {
            router.replace("/about");
            handleFocus("about");
          }}
        >
          About me
        </Button>
        <Button
          textStyle={{
            color: "white",
            fontWeight: "500",
            textAlign: "center",
          }}
          onPress={() => {
            router.replace("/projects");
            handleFocus("projects");
          }}
        >
          Projects
        </Button>
      </View>
    </View>
  );
};

export default Welcome;
