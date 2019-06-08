import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
export default function SettingsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 50, backgroundColor: "grey" }}>
        <Text style={{ color: "white", fontSize: 30 }}>Search Parks</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {[1, 2, 3, 4, 5].map(v => (
          <View key={v}>
            <Text>{v}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
  drawerLabel: "Current fire danger",
  drawerIcon: ({ tintColor }) => (
    <SimpleLineIcons name="fire" size={24} color={tintColor} />
  )
};
