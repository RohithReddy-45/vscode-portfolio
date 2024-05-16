import { Text, View } from "@/components/Themed";
import { useTheme } from "@/hooks";
import { ScrollView } from "react-native";

const skills = () => {
  const { theme } = useTheme();
  return (
    <ScrollView
      className="py-2 px-5"
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ color: theme.colors.textSecondary }} className="text-base">
        {"{"}
      </Text>
      <View className="ml-4 space-y-1">
        <Text
          className="leading-5 text-base"
          style={{ color: theme.colors.textPrimary }}
        >
          <Text style={{ color: theme.colors.textSecondary }}>
            "Languages":{" "}
          </Text>
          ["JavaScript", "TypeScript", "Python", "SQL"],
        </Text>
        <Text
          className="leading-5 text-base"
          style={{ color: theme.colors.textPrimary }}
        >
          <Text style={{ color: theme.colors.textSecondary }}>
            "Frontend":{" "}
          </Text>
          ["React.js", "Next.js", "Redux.js", "Tailwind CSS",
          "Styled-Components", "Framer motion", "HTML", "CSS"],
        </Text>
        <Text
          className="leading-5 text-base"
          style={{ color: theme.colors.textPrimary }}
        >
          <Text style={{ color: theme.colors.textSecondary }}>"Backend": </Text>
          ["Node.js", "Express.js", "MongoDB", "React Query", "MySQL",
          "Supabase"],
        </Text>
        <Text
          className="leading-5 text-base"
          style={{ color: theme.colors.textPrimary }}
        >
          <Text style={{ color: theme.colors.textSecondary }}>"Mobile": </Text>{" "}
          ["React Native", "Expo"],
        </Text>
        <Text
          className="leading-5 text-base"
          style={{ color: theme.colors.textPrimary }}
        >
          <Text style={{ color: theme.colors.textSecondary }}>"Tools": </Text>{" "}
          ["Git", "GitHub", "Figma", "Framer", "Postman", "Vercel"]
        </Text>
      </View>
      <Text style={{ color: theme.colors.textSecondary }} className="text-base">
        {"}"}
      </Text>
    </ScrollView>
  );
};

export default skills;
