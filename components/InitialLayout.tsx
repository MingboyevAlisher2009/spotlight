import { useAuth } from "@clerk/clerk-expo";
import { useRouter, useSegments, Slot } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const isAuthScreen = segments[0] === "(auth)";

    if (!isSignedIn && !isAuthScreen) {
      router.replace("/(auth)/login");
    } else if (isSignedIn && isAuthScreen) {
      router.replace("/(tabs)");
    }
  }, [isLoaded, isSignedIn, segments]);

  return <Slot />;
}
