import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SettingsScreen(props) {
  donate = () => {
    props.navigation.navigate("DonationConfirm", { amount: 10 });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
      <Ionicons name="ios-heart" size={200} color="grey" />
      <Text style={{ fontSize: 40 }}>Show your support and donate</Text>
      <View
        style={{
          padding: 20,
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <TouchableOpacity
          onPress={donate}
          style={{
            width: 300,
            height: 50,
            justifyContent: "center",
            backgroundColor: "grey",
            margin: 10,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>$2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={donate}
          style={{
            width: 300,
            height: 50,
            justifyContent: "center",
            backgroundColor: "grey",
            margin: 10,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>$5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={donate}
          style={{
            width: 300,
            height: 50,
            justifyContent: "center",
            backgroundColor: "grey",
            margin: 10,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>$10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={donate}
          style={{
            width: 300,
            height: 50,
            justifyContent: "center",
            backgroundColor: "grey",
            margin: 10,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>Others</Text>
        </TouchableOpacity>
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
