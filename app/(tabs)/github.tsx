import { useQueries } from "@tanstack/react-query";
import { Image } from "expo-image";
import { FlatList, ViewToken } from "react-native";

import Error from "@/components/Error";
import GithubCard from "@/components/GithubCard";
import Loader from "@/components/Loader";
import { Text, View } from "@/components/Themed";
import { githubData, githubRepos } from "@/data/githubData";
import { useTheme } from "@/hooks";
import { useSharedValue } from "react-native-reanimated";

const Github = () => {
  const { theme } = useTheme();
  const viewableItems = useSharedValue<ViewToken[]>([]);
  const [githubDataResult, githubReposResult] = useQueries({
    queries: [
      {
        queryKey: ["github"],
        queryFn: githubData,
      },
      {
        queryKey: ["githubRepos"],
        queryFn: githubRepos,
      },
    ],
  });

  const isLoading = githubDataResult?.isLoading || githubReposResult?.isLoading;
  const error = githubDataResult?.error || githubReposResult?.error;

  const data = {
    githubData: githubDataResult?.data,
    githubRepos: githubReposResult?.data,
  };

  return (
    <View className="px-5 py-2 w-fit h-full">
      {error ? (
        <Error error={"Something went wrong , Please try again later."} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <FlatList
          ListHeaderComponent={
            <View className="items-center gap-y-2">
              <View className="flex-row items-center justify-center gap-2">
                <Image
                  source={{
                    uri: data.githubData?.avatar_url,
                  }}
                  contentFit="contain"
                  className="w-8 h-8 rounded-md"
                />
                <Text
                  className="text-lg"
                  style={{
                    color: theme.colors.textPrimary,
                  }}
                >
                  {data?.githubData?.name}
                </Text>
              </View>
              <View className="flex-row gap-x-3">
                <View className="flex-row items-center">
                  <Text
                    className="text-base"
                    style={{
                      color: theme.colors.textPrimary,
                    }}
                  >
                    Repos :{" "}
                  </Text>
                  <Text
                    className="text-base"
                    style={{
                      color: theme.colors.textHighlight,
                    }}
                  >
                    {data?.githubData?.public_repos}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <Text
                    className="text-base"
                    style={{
                      color: theme.colors.textPrimary,
                    }}
                  >
                    Followers :{" "}
                  </Text>
                  <Text
                    className="text-base"
                    style={{
                      color: theme.colors.textHighlight,
                    }}
                  >
                    {data?.githubData?.followers}
                  </Text>
                </View>
              </View>
            </View>
          }
          onViewableItemsChanged={({ viewableItems: vItems }) => {
            viewableItems.value = vItems;
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
          bounces={false}
          data={data?.githubRepos}
          keyExtractor={(item, index) => item.name + index.toString()}
          renderItem={({ item }) => (
            <GithubCard
              item={item.id}
              name={item.name}
              description={item.description}
              giturl={item.giturl}
              site={item.site}
              viewableItems={viewableItems}
            />
          )}
        />
      )}
    </View>
  );
};

export default Github;
