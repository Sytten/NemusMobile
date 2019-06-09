import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Dimensions,
  Button
} from "react-native";
// import * as AppAuth from "expo-app-auth";
const { width, height } = Dimensions.get("window");
import CurrentFireDanger from "../components/CurrentFireDanger";
import {
  Feather,
  MaterialCommunityIcons,
  Entypo,
  Foundation,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";

export default function TripScreen(props) {
  let data = {
        "id": 3,
        "name": "Yosemite Valley",
        "latitude": 37.721667,
        "longitude": -119.646389,
        "imageTag": "1e757e5e-8cbd-46f0-bbca-ab60f21d2386",
        "dangerLevel": "LOW",
        "rating": 5,
        "address": "9035 Village Dr, Yosemite Valley, CA 95389",
        "website": "nps.gov",
        "number": "(209) 372-0200",
        "description": "Iconic national park offers an array of options such as hiking among redwoods & river rafting."
    }
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Image
          style={{ width: width, height: 160 }}
          source={{
            uri:
              `https://storage.googleapis.com/nemus-parks-images/${data.imageTag}`
          }}
        />

        <Text
          style={{
            fontSize: 32,
            padding: 5,
            fontWeight: "bold",
            marginBottom: 5
          }}
        >
          {data.name}
        </Text>

        <View style={{ flex: 1, flexDirection: "column", marginBottom: 5 }}>
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <FontAwesome
              name="map-marker"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>
              {data.address}
            </Text>
          </View>

          {/*<View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <Entypo
              name="address"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>
              66VF+48 Loma Vista, Big Sur, CA
            </Text>
          </View>*/}

          <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <MaterialCommunityIcons
              name="web"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>{data.website}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <Feather
              name="phone"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>{data.number}</Text>
          </View>

          <Text style={{ marginBottom: 10, padding: 5, marginTop: 10 }}>
            {data.description}
          </Text>
          <CurrentFireDanger />
        </View>
      </View>
    </ScrollView>
  );
}

TripScreen.navigationOptions = {
  header: null,
  drawerLabel: "Current Trip",
  drawerIcon: ({ tintColor }) => (
    <Foundation name="foot" size={24} color={tintColor} />
  )
};
