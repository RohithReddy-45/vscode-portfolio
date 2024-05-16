import { FlatList, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import ProjectCard from "@/components/ProjectCard";
import { Text, View } from "@/components/Themed";
import { projects as projectData } from "@/data/data";
import { useTheme } from "@/hooks";
import { useCallback } from "react";

const projects = () => {
  const { theme } = useTheme();
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems: vItems }: { viewableItems: ViewToken[] }) => {
      viewableItems.value = vItems;
    },
    [viewableItems]
  );

  return (
    <View
      className="px-5 py-2 h-full w-fit"
      style={{
        backgroundColor: theme.colors.backgroundLight,
      }}
    >
      <FlatList
        ListHeaderComponent={() => {
          return (
            <Text
              className="text-xl font-semibold"
              style={{
                color: theme.colors.textPrimary,
              }}
            >
              Cool stuff I've worked on
            </Text>
          );
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        data={projectData}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProjectCard
            item={item.id}
            title={item.name}
            description={item.description}
            image={item.image}
            tags={item.tags}
            liveUrl={item.liveSite}
            sourceUrl={item.githubLink}
            viewableItems={viewableItems}
          />
        )}
      />
    </View>
  );
};

export default projects;
