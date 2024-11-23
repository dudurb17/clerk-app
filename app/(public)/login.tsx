import { View, Text, StyleSheet, TextInput, Button, Pressable } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = ()=>{

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acessar conta</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Digite seu email..."
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Digite sua senha..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Acessar" color="#121212" onPress={handleSignin} />
      <Link href='/register' asChild>
        <Pressable style={styles.button}>
          <Text>Ainda não possui uma conta? Cadastre-se</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 14,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#121212",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});
