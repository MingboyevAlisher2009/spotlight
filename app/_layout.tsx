import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import InitialLayout from "@/components/InitialLayout";
import ClerckAndConvexProovider from "@/providers/clerck-and-convex-proovider";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return (
    <ClerckAndConvexProovider>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "#000" }}
          onLayout={onLayoutRootView}
        >
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerckAndConvexProovider>
  );
}
