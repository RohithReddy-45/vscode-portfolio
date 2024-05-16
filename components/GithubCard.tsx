import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { memo } from "react";

import { useTheme } from "@/hooks";
import { GithubRepo } from "@/types/types";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ExternalLink } from "./ExternalLink";
import { Text, View } from "./Themed";

const GithubCard: React.FC<GithubRepo> = memo(
  ({ item, name, description, giturl, site, viewableItems }: GithubRepo) => {
    const { theme } = useTheme();

    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((item) => item.isViewable)
          .find((viewableItem) => viewableItem.item.id === item)
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    }, []);

    return (
      <Animated.View
        className="mt-4 px-4 py-2 rounded-lg"
        style={[
          {
            backgroundColor: theme.colors.cardBackground,
          },
          rStyle,
        ]}
      >
        <Text
          className="mt-3 text-lg font-medium"
          style={{
            color: theme.colors.textPrimary,
          }}
        >
          {name}
        </Text>
        <Text
          className="leading-5"
          style={{
            color: theme.colors.highlight,
            opacity: 0.9,
          }}
        >
          {description}
        </Text>

        <View className="flex-row justify-between mt-3 py-2 px-1 items-center">
          <ExternalLink href={giturl}>
            <AntDesign
              name="github"
              size={18}
              color={theme.colors.textHighlight}
            />
          </ExternalLink>
          <ExternalLink
            href={site}
            style={{
              color: theme.colors.textHighlight,
              fontWeight: "500",
            }}
          >
            <EvilIcons
              name="external-link"
              size={22}
              color={theme.colors.textHighlight}
            />
          </ExternalLink>
        </View>
      </Animated.View>
    );
  }
);

export default GithubCard;
