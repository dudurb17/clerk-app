import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerTitle:"Criar conta" }} />
    </Stack>
  );
}
