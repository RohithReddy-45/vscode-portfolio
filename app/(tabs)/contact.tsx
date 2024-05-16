import { ExternalLink } from "@/components/ExternalLink";
import { Text, View } from "@/components/Themed";
import { useTheme } from "@/hooks";

const contact = () => {
  const { theme } = useTheme();
  return (
    <View className="py-2 px-5">
      <Text
        className="text-base"
        style={{
          color: theme.colors.highlight,
        }}
      >
        .contact-info {"{"}
      </Text>
      <View className="ml-4">
        <Text className="text-base" style={{ color: theme.colors.textPrimary }}>
          linkedin :{" "}
          <ExternalLink
            href="https://www.linkedin.com/in/rohith-reddy45"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            rohith-reddy45
          </ExternalLink>
        </Text>
        <Text className="text-base" style={{ color: theme.colors.textPrimary }}>
          twitter :{" "}
          <ExternalLink
            href="https://twitter.com/Ro_dev45"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            Ro_dev45
          </ExternalLink>
        </Text>
        <Text className="text-base" style={{ color: theme.colors.textPrimary }}>
          github :{" "}
          <ExternalLink
            href="https://github.com/RohithReddy-45"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            RohithReddy-45
          </ExternalLink>
        </Text>
        <Text className="text-base" style={{ color: theme.colors.textPrimary }}>
          email :{" "}
          <ExternalLink
            href="mailto:samreddyrohith@gmail.com"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            samreddyrohith@gmail.com
          </ExternalLink>
        </Text>
        <Text className="text-base" style={{ color: theme.colors.textPrimary }}>
          website :{" "}
          <ExternalLink
            href="https://rohith-reddy.vercel.app/"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            Rohith reddy
          </ExternalLink>
        </Text>
        <Text className="text-base" style={{ color: theme.colors.textPrimary }}>
          instagram :{" "}
          <ExternalLink
            href="https://www.instagram.com/codingdev45/"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            codingdev45
          </ExternalLink>
        </Text>
      </View>
      <Text
        className="text-base"
        style={{
          color: theme.colors.highlight,
        }}
      >
        {"}"}
      </Text>
    </View>
  );
};

export default contact;
