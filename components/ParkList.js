import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Image } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import CurrentFireDanger from "./CurrentFireDanger";
import { Rating, AirbnbRating } from "react-native-elements";
export default props => {
  toDetail = () => {
    props.navigation.navigate("DetailScreen", props);
  };
  return (
    <TouchableOpacity style={{ flex: 1, padding: 20 }} onPress={toDetail}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 26 }}>{props.name}</Text>
          <Text style={{ fontSize: 14 }}>{props.address}</Text>
          <Text style={{ fontSize: 18 }}>{props.website}</Text>
          <Text style={{ fontSize: 18 }}>{props.number}</Text>
          <View style={{ alignItems: "flex-start" }}>
            <Rating imageSize={24} readonly startingValue={props.rating} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={{
              uri: `https://storage.googleapis.com/nemus-parks-images/${
                props.imageTag
              }`
            }}
            style={{ width: 100, height: 150 }}
          />
        </View>
      </View>
      <CurrentFireDanger color={props.dangerLevel} />
    </TouchableOpacity>
  );
};
