import { Image } from "expo-image";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { Text, View } from "@/components/Themed";
import { useTheme } from "@/hooks";
import { ProjectCardProps } from "@/types/types";
import { memo } from "react";
import { ExternalLink } from "./ExternalLink";

const ProjectCard = memo(
  ({
    item,
    title,
    description,
    image,
    liveUrl,
    sourceUrl,
    tags,
    viewableItems,
  }: ProjectCardProps) => {
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
      <View className="pt-2 max-w-md pb-3">
        <Animated.View
          className="px-4 py-3 rounded-lg mt-2"
          style={[
            {
              backgroundColor: theme.colors.cardBackground,
            },
            rStyle,
          ]}
        >
          <Image
            source={image}
            alt={title}
            contentFit="cover"
            style={{
              width: 150,
              height: 150,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
          <Text
            className="mt-3 text-lg font-medium"
            style={{
              color: theme.colors.textPrimary,
            }}
          >
            {title}
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
          <Text
            className="text-xs mt-3 italic"
            style={{
              color: theme.colors.highlight,
              opacity: 0.9,
            }}
          >
            {tags.join(", ")}
          </Text>
          <View className="flex-row justify-between mt-1 py-2 px-1 items-center">
            <ExternalLink
              href={liveUrl}
              style={{
                color: theme.colors.textHighlight,
                fontWeight: "500",
              }}
            >
              View site
            </ExternalLink>
            <ExternalLink
              href={sourceUrl}
              style={{
                color: theme.colors.textHighlight,
                fontWeight: "500",
              }}
            >
              View code
            </ExternalLink>
          </View>
        </Animated.View>
      </View>
    );
  }
);

export default ProjectCard;
