import { useTheme } from "@/hooks";
import Images from "@/utils/Images";
import { Image } from "expo-image";
import { Text, View } from "react-native";

const Header = () => {
  const { theme } = useTheme();
  return (
    <View className="flex-row py-1 px-3 mb-2 items-center">
      <Image
        source={Images.vscodeLogo}
        alt="Visual Studio Code Logo"
        style={{
          width: 17,
          height: 17,
        }}
      />
      <Text
        style={{
          color: theme.colors.textHighlight,
        }}
        className="flex-1 text-center"
      >
        Rohith reddy - Visual studio code
      </Text>
    </View>
  );
};

export default Header;
