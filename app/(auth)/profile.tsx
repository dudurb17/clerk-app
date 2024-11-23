import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();


  const [firstName, setFirstName] = useState(user?.firstName ?? "");
  const [lastName, setLastName] = useState(user?.lastName ?? "");

  async function handleUpdateProfile() {
    try {
      const result = await user?.update({
        firstName: firstName,
        lastName: lastName,
      });
      console.log('Usuario Atulizado: '+result)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{textAlign:"center", marginBottom:20, fontSize:20}}>Bem vindo: {user?.fullName && user.fullName}</Text>

      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Digite seu primeiro nome..."
        style={styles.input}
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Digite seu sobrenome"
        style={styles.input}
      />
      <Button
        title="Atualizar perfil"
        color="#121212"
        onPress={handleUpdateProfile}
      />
      <View style={{margin:4}}/>
      <Button
        title="sair"
        color="red"
        onPress={()=>signOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
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
});
