import { useAuth } from "@clerk/clerk-expo";
import { Stack } from "expo-router";


export default function StackPage() {
  const { isSignedIn } = useAuth();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerTintColor: "#FFF",
      }}
    >
      <Stack.Screen
        name="home"
        options={{ headerTitle: "Home" }}
        redirect={!isSignedIn}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
        }}
        redirect={!isSignedIn}
      />
    </Stack>
  );
}
