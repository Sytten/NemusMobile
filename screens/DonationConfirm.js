import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Confirm donation</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>Total</Text>
        <Text>$10</Text>
      </View>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
  drawerLabel: "Donate",
  drawerIcon: ({ tintColor }) => (
    <Ionicons name="ios-heart" size={24} color={tintColor} />
  )
};
