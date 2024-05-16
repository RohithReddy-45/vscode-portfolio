import { Text, View } from "@/components/Themed";
import { useTheme } from "@/hooks";

type ErrorProps = {
  error: string;
};

const Error = ({ error }: ErrorProps) => {
  const { theme } = useTheme();
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        className="text-xl text-center"
        style={{
          color: theme.colors.textPrimary,
        }}
      >
        {error}
      </Text>
    </View>
  );
};

export default Error;
