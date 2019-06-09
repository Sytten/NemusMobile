import React from "react";
import { Text, View } from "react-native";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
export default props => {
  const color = props.color === "GREEN" ? "green" : "red";
  return (
    <View
      style={{
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#E8F3ED",
        alignItems: "center"
      }}
    >
      <SimpleLineIcons name="fire" size={24} color="black" />
      <Text>Current fire danger</Text>
      <MaterialCommunityIcons
        name="checkbox-blank-circle"
        size={24}
        color={color}
      />
    </View>
  );
};
