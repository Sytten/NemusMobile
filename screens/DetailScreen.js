import React, { useEffect, useState } from "react";
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
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";

export default function DetailScreen(props) {
  let data = props.navigation.state.params;
  let stars = []
  for (var i = 0; i < data.rating; i++) {
    stars.push(<Ionicons key={i} name="ios-star" size={24} color={"gold"} style={{marginRight:5}}/>)
  }
  const park = props.navigation.getParam("park");
  const [passes, setPasses] = useState([]);
  const parkId = data.id;
  useEffect(() => {
    fetch(`http://api.nemus.world/parks/${parkId}/passes`)
      .then(response => response.json())
      .then(responseJson => {
        setPasses(responseJson);
      });
  }, []);
  toOptions = pass => {
    props.navigation.navigate("PassOptionsScreen", { pass });
  };
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

        <View
          style={{ flex: 1, flexDirection: "row", marginBottom: 5, padding: 5 }}
        >
          {stars}
        </View>

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
          <View
            style={{ backgroundColor: "#0056FF", padding: 5, marginBottom: 10 }}
          >
            <Button
              color="white"
              style={{ textAlign: "center", color: "white", fontSize: 26 }}
              onPress={() => {
                console.log("foo");
                props.navigation.navigate("PassOptionsScreen");
              }}
              title="Buy Tickets"
            />
          </View>
          <Text>Tickets</Text>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly"
            }}
          >
            {passes.map((p, i) => (
              <View key={i}>
                <TouchableOpacity onPress={() => toOptions(p)}>
                  <Text>{p.type}</Text>
                  <Text>max days: {p.maxDays}</Text>
                  <Text>max people: {p.maxPeople}</Text>
                  <Text>fee: {p.fee}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
