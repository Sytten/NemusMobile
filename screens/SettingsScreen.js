import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SettingsScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  signup = () => {
    
  }
  return (
    <View style={{ flex: 1, alignItems: "stretch" }}>
      <TextInput value={firstName} onChangeText={t => setFirstName(t)} />
      <TextInput value={lastName} onChangeText={t => setLastName(t)} />
      <TextInput value={email} onChangeText={t => setEmail(t)} />
      <TextInput
        value={password}
        onChangeText={t => setPassword(t)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={signup}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
  drawerLabel: "Settings",
  drawerIcon: ({ tintColor }) => (
    <AntDesign name="setting" size={24} color={tintColor} />
  )
};
