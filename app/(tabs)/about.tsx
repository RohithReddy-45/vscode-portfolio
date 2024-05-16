import Button from "@/components/Button";
import { ExternalLink } from "@/components/ExternalLink";
import { Text } from "@/components/Themed";
import { useTheme } from "@/hooks";
import { useFocus } from "@/providers/FocusProvider";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

const about = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { handleFocus } = useFocus();
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      className="px-5 py-3"
    >
      <Text className="text-base" style={{ color: theme.colors.textPrimary }}>
        I'm Rohith, a front-end developer based in India with a growing interest
        in full-stack development. I have a passion for coding and design, and I
        take pleasure in creating visually appealing websites that function
        seamlessly. My curiosity drives me to constantly learn and experiment
        with new technologies. I'm always eager to enhance my skills and
        contribute to exciting projects.
      </Text>
      <Text
        className="text-base mt-4"
        style={{ color: theme.colors.textPrimary }}
      >
        Interested in collaborating on a project? Feel free to reach out via{" "}
        <ExternalLink
          href="mailto:samreddyrohith@gmail.com"
          className="text-blue-500 underline"
        >
          email
        </ExternalLink>{" "}
        or connect with me on social media. I would be delighted to hear from
        you.
      </Text>
      <Button
        textStyle={{
          color: "white",
          fontWeight: "500",
          alignSelf: "center",
        }}
        onPress={() => {
          router.replace("/contact");
          handleFocus("contact");
        }}
        className="mt-4"
      >
        Contact Me
      </Button>
    </ScrollView>
  );
};

export default about;
