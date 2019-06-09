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
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  Foundation,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";

import moment from "moment";

export default class ParkScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [
  
] };
  }

  getParks() {
    return fetch("http://api.nemus.world/users/1/trips")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ data: json });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getParks();
  }
  

  render() {
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
          Previous trips
        </Text>
         {this.state.data.map(function(data, i) {
          return (
      <View key={i} style={{ flex: 1, flexDirection: "column" }}>
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
          {data.pass.park.name}
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
      </View>);
        })}
    </ScrollView>
  );
}
}

ParkScreen.navigationOptions = {
  header: null,
  drawerLabel: "Your Parks",
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="local-parking" size={24} color={tintColor} />
  )
};
