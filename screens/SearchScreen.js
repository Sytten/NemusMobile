import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ParkList from "../components/ParkList";

export default function SettingsScreen(props) {
  const [keyword, setKeyword] = useState("");
  const [parks, setParks] = useState([]);
  useEffect(() => {
    fetch("http://api.nemus.world/parks")
      .then(response => response.json())
      .then(responseJson => {
        setParks(responseJson);
      });
  }, []);
  openSidebar = () => {
    props.navigation.navigate("MainMap");
  };
  searchKeyword = () => {
    console.log("searchKeyword");
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 75,
          backgroundColor: "grey",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 10
        }}
      >
        <TouchableOpacity onPress={openSidebar}>
          <FontAwesome name="navicon" size={28} color="white" />
        </TouchableOpacity>
        <TextInput
          value={keyword}
          onChangeText={t => setKeyword(t)}
          style={{ color: "white", fontSize: 20 }}
          placeholder="Search Parks"
        />
        <TouchableOpacity onPress={searchKeyword}>
          <FontAwesome name="search" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {parks.map((v, i) => (
          <ParkList key={i} {...props} {...v} />
        ))}
      </ScrollView>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
  drawerLabel: "Search",
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="search" size={24} color={tintColor} />
  )
};
navigationOptions = {
  header: null
};
