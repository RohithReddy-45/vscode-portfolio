import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { FlatList } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import Container from "@/components/Container";
import FileHeader from "@/components/FileHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { View } from "@/components/Themed";
import { files } from "@/data/data";
import { useTheme } from "@/hooks";
import { FocusProvider, useFocus } from "@/providers/FocusProvider";
import { ThemeProvider } from "@/providers/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)/index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const queryClient = new QueryClient();

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <FocusProvider>
          <RootLayoutNav />
        </FocusProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const { theme } = useTheme();
  const isDark = theme.dark;
  const { focused, setFocused } = useFocus();
  const { flatListRef, handleFocus } = useFocus();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Container>
        <Header />
        <View className="flex-1">
          <View className="flex-row">
            <Sidebar handleFocus={handleFocus} />
            <View className="flex-1">
              <View
                style={{
                  backgroundColor: theme.colors.backgroundDark,
                }}
              >
                <FlatList
                  ref={flatListRef}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={files}
                  keyExtractor={(item) => item.name}
                  bounces={false}
                  renderItem={({ item: file }) => (
                    <FileHeader
                      key={file.name}
                      fileName={file.name}
                      icon={file.icon}
                      focused={focused}
                      setFocused={setFocused}
                    />
                  )}
                  contentContainerStyle={{
                    backgroundColor: theme.colors.backgroundDark,
                    marginRight: 10,
                    height: 35,
                  }}
                />
              </View>

              <Stack
                screenOptions={{
                  headerShown: false,
                  animation: "fade",
                  contentStyle: {
                    backgroundColor: theme.colors.backgroundLight,
                  },
                }}
              />
            </View>
          </View>
        </View>
        <Footer />
      </Container>
    </SafeAreaProvider>
  );
}
