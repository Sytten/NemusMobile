import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Image } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default props => {
  toDetail = () => {
    props.navigation.navigate("DetailScreen");
  };
  return (
    <TouchableOpacity
      style={{ flex: 1, flexDirection: "row", padding: 20 }}
      onPress={toDetail}
    >
      <View>
        <Text style={{ fontSize: 20 }}>{props.name}</Text>
      </View>
      <View>
        <Image
          source={{
            uri: `https://storage.googleapis.com/nemus-parks-images/${
              props.imageTag
            }`
          }}
          style={{ width: 100, height: 150 }}
        />
      </View>
    </TouchableOpacity>
  );
};
