import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";

export default function Home() {
  const { user } = useUser();

  return (
    <View>
      <Text>Home</Text>
      <Text> Email:{user?.emailAddresses[0].emailAddress}</Text>

      <Link href="/profile">Navegar para profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
