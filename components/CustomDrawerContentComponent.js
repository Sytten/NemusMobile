import React from "react";
import { DrawerItems } from "react-navigation";
import { View, Text, ScrollView, Image } from "react-native";

export default props => {
  return (
    <ScrollView>
      <View
        style={{
          height: 100,
          backgroundColor: "grey",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Image source={require("../assets/images/profile.png")} />
        <Text style={{fontSize: 20, color:"white", marginRight: 80}}>John Doe</Text>
      </View>
      <DrawerItems {...props} />
    </ScrollView>
  );
};
