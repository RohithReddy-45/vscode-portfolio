import { ImageProps, ImageSource } from "expo-image";
import { PressableProps, TextProps, ViewToken } from "react-native";
import { SharedValue } from "react-native-reanimated";

export type FileHeaderProps = {
  fileName: string;
  icon: ImageProps["source"];
  focused: string;
  setFocused: (name: string) => void;
};

export type ProjectCardProps = {
  item: number;
  title: string;
  description: string;
  image: ImageSource;
  liveUrl: string;
  sourceUrl: string;
  tags: string[];
  viewableItems: SharedValue<ViewToken[]>;
};

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  image: ImageSource;
  githubLink: string;
  liveSite: string;
  tags: string[];
}[];

export interface GithubData {
  avatar_url: string;
  url: string;
  repos_url: string;
  name: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GithubRepo {
  item: number;
  name: string;
  description: string;
  giturl: string;
  site: string;
  viewableItems: SharedValue<ViewToken[]>;
}
export interface ButtonProps extends PressableProps {
  textStyle: TextProps["style"];
  children: React.ReactNode;
}
