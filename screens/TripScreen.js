import React from "react";
import { View, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TripScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 50, backgroundColor: "grey" }}>
        <Text style={{ color: "white", fontSize: 30 }}>Search Parks</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text>ID: {props.navigation.getParam("tripId")}</Text>
        </View>
        {[1, 2, 3, 4, 5].map(v => (
          <View key={v}>
            <Text>{v}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

TripScreen.navigationOptions = {
  header: null,
  drawerLabel: "Current Trip",
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="local-parking" size={24} color={tintColor} />
  )
};
