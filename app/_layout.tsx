import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    figtree: require("./../assets/fonts/Figtree-Regular.ttf"),
    "figtree-bold": require("./../assets/fonts/Figtree-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Show a fallback UI until fonts load
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
