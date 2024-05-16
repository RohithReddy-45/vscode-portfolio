import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "@/hooks";
import { View } from "./Themed";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: theme.colors.backgroundDark,
      }}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: theme.colors.textHighlight,
        }}
      />
      {children}
    </SafeAreaView>
  );
}
