import React, { useState, useEffect } from "react";
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
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  Foundation,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";

import moment from "moment";

export default function TripScreen(props) {
  const [data, setData] = useState({
    "id": 1,
    "startDate": "2019-05-04T17:00:00.000Z",
    "endDate": "2019-08-06T17:00:00.000Z",
    "numberPeople": 2,
    "licensePlate": null,
    "pass": {
        "id": 1,
        "type": "CAMPING",
        "maxDays": 10,
        "maxPeople": 4,
        "fee": 20,
        "park": {
          "id": 1,
          "name": "Pinnacles State Park",
          "latitude": 36.486944,
          "longitude": -121.166944,
          "imageTag": "192fa5f6-d7be-45fa-83df-03d775dec680",
          "dangerLevel": "LOW",
          "rating": 4,
          "address": "2400 Pinnacles Hwy, Paicines, CA 95043",
          "website": "visitpinnacles.com",
          "number": "(831) 389-4538",
          "description": "The remains of an ancient volcanic field, this park features geologic sights, caves & condors."
      }
    }
  });
  useEffect(() => {
    fetch("http://api.nemus.world/users/1/trips")
      .then(response => response.json())
      .then(json => {
        let current = { id: 0 }
        for (const t of json) {
          if (t.id > current.id) {
            current = t;
          }
        }
        setData(current);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text
          style={{
            fontSize: 32,
            padding: 5,
            fontWeight: "bold",
            marginBottom: 5
          }}
        >
          Current trip
        </Text>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Image
          style={{ width: width, height: 160 }}
          source={{
            uri:
              `https://storage.googleapis.com/nemus-parks-images/${data.pass.park.imageTag}`
          }}
        />

        <Text
          style={{
            fontSize: 24,
            padding: 5,
            fontWeight: "bold",
            marginBottom: 5
          }}
        >
           #{data.id} {data.pass.park.name}
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
              {data.pass.park.address}
            </Text>
          </View>

          {/*<View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <FontAwesome
              name="ticket"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>
              #{data.id}
            </Text>
          </View>*/}

          <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <Entypo
              name="calendar"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>{moment(data.startDate).format('LL')} – {moment(data.endDate).format('LL')}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <MaterialIcons
              name="people"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>{data.numberPeople}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <Feather
              name="phone"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>{data.pass.park.number}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <FontAwesome
              name="money"
              size={24}
              color={"#0056FF"}
              style={{ width: 36, textAlign: "center" }}
            />
            <Text style={{ fontSize: 16 }}>${data.pass.fee}</Text>
          </View>
          
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
