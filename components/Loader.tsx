import { useTheme } from "@/hooks";
import { View } from "./Themed";

const Loader = () => {
  const { theme } = useTheme();
  return (
    <View
      className="opacity-80 items-center justify-center overflow-hidden py-4"
      style={{
        backgroundColor: theme.colors.backgroundLight,
      }}
    >
      <View className="mb-6 w-[250px] space-y-4">
        <View className="flex-row items-center gap-3 px-10">
          <View className="w-8 h-8 rounded-md bg-gray-200/40"></View>
          <View className="h-3 w-3/5 rounded-md bg-gray-200/40"></View>
        </View>
        {/* repo text */}
        <View className="flex-row px-5 gap-x-5">
          <View className="flex-row items-center gap-2">
            <View className="h-3 w-14 rounded-md bg-gray-200/40"></View>
            <View className="h-3 w-4 rounded-md bg-gray-200/40"></View>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="h-3 w-14 rounded-md bg-gray-200/40"></View>
            <View className="h-3 w-4 rounded-md bg-gray-200/40"></View>
          </View>
        </View>
      </View>
      {/* card */}
      <View className="items-center space-y-5">
        <View
          className="w-[270px] h-[160px] rounded-lg"
          style={{
            backgroundColor: theme.colors.cardBackground,
            opacity: 0.8,
          }}
        >
          <View className="overflow-hidden px-4 py-8">
            <View className="space-y-3">
              <View className="h-3 w-2/5 rounded-md bg-gray-200/40"></View>
              <View className="h-3 w-4/5 rounded-md bg-gray-200/40"></View>
              <View className="h-3 w-3/5 rounded-md bg-gray-200/40"></View>

              {/* icons */}
              <View className="flex-row justify-between pt-4">
                <View className="h-6 w-6 rounded-full bg-gray-200/40"></View>
                <View className="h-6 w-6 rounded-full bg-gray-200/40"></View>
              </View>
            </View>
          </View>
        </View>
        <View
          className="w-[270px] h-[160px] rounded-lg"
          style={{
            backgroundColor: theme.colors.cardBackground,
            opacity: 0.8,
          }}
        >
          <View className="overflow-hidden px-4 py-8">
            <View className="space-y-3">
              <View className="h-3 w-2/5 rounded-md bg-gray-200/40"></View>
              <View className="h-3 w-4/5 rounded-md bg-gray-200/40"></View>
              <View className="h-3 w-3/5 rounded-md bg-gray-200/40"></View>

              {/* icons */}
              <View className="flex-row justify-between pt-4">
                <View className="h-6 w-6 rounded-full bg-gray-200/40"></View>
                <View className="h-6 w-6 rounded-full bg-gray-200/40"></View>
              </View>
            </View>
          </View>
        </View>
        <View
          className="w-[270px] h-[160px] rounded-lg"
          style={{
            backgroundColor: theme.colors.cardBackground,
            opacity: 0.8,
          }}
        >
          <View className="overflow-hidden px-4 py-8">
            <View className="space-y-3">
              <View className="h-3 w-2/5 rounded-md bg-gray-200/40"></View>
              <View className="h-3 w-4/5 rounded-md bg-gray-200/40"></View>
              <View className="h-3 w-3/5 rounded-md bg-gray-200/40"></View>

              {/* icons */}
              <View className="flex-row justify-between pt-4">
                <View className="h-6 w-6 rounded-full bg-gray-200/40"></View>
                <View className="h-6 w-6 rounded-full bg-gray-200/40"></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Loader;
