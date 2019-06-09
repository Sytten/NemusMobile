import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

export default function SettingsScreen(props) {
  const [password, setPassword] = useState("");
  toMain = () => {
    props.navigation.navigate("MainMap");
  };
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 30, flex: 1 }}>Confirm donation</Text>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Text style={{ fontSize: 30 }}>Total</Text>
        <Text style={{ fontSize: 30 }}>
          ${props.navigation.getParam("amount", 10)}
        </Text>
      </View>
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Image
          source={require("../assets/images/security.png")}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
        <TextInput
          value={password}
          onChangeText={t => setPassword(t)}
          placeholder="Enter Password"
          secureTextEntry={true}
          style={{ fontSize: 30 }}
        />
      </View>
      <TouchableOpacity
        onPress={toMain}
        style={{
          width: 200,
          height: 80,
          backgroundColor: "grey",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 30 }}>Confirm</Text>
      </TouchableOpacity>
      <View style={{ flex: 3 }}>
        <Image
          source={require("../assets/images/wilderness.jpeg")}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
        />
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
