import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text, Picker, Button, TextInput } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function RangerScreen(props) {
  const parkId = 1
  const [people, setPeople] = useState(0);
  const [dangerLevel, setdangerLevel] = useState("LOW");
  const [tripId, setTripId] = useState(0)
  useEffect(() => {
    fetch(`http://api.nemus.world/parks/${parkId}/people`)
      .then(response => response.json())
      .then(responseJson => {
        setPeople(responseJson["total"]);
      });
    fetch(`http://api.nemus.world/parks/${parkId}`)
      .then(response => response.json())
      .then(responseJson => {
        setdangerLevel(responseJson["dangerLevel"]);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 50, backgroundColor: "grey" }}>
        <Text style={{ color: "white", fontSize: 30 }}>Park management</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{marginBottom: 10, marginTop: 10, backgroundColor: "#F1F1F1"}}>
          <View style={{margin: 10, alignItems: 'center'}}>
            <Text style={{ fontSize: 20, marginBottom: 5, fontWeight: "bold" }}>People in the park</Text>
            <Text style={{ fontSize: 50}}>{people}</Text>
          </View>   
        </View>
        <View style={{marginBottom: 10, backgroundColor: "#F1F1F1"}}>
          <View style={{margin: 10, alignItems: 'center'}}>
            <Text style={{ fontSize: 20, marginBottom: 5, fontWeight: "bold"}}>Risk</Text>
            <View style={{ borderWidth: 1, borderColor: 'gray'}}>
              <Picker
                selectedValue={dangerLevel}
                style={{height: 50, width: 300}}
                onValueChange={(itemValue, itemIndex) => {
                  setdangerLevel(itemValue)
                  fetch(`http://api.nemus.world/parks/${parkId}/danger`, {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      dangerLevel: itemValue
                    }),
                  })
                  fetch(`http://api.nemus.world/parks/${parkId}/notify`, {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      status: itemValue
                    }),
                  })
                }}>
                <Picker.Item label="Low" value="LOW" />
                <Picker.Item label="Medium" value="MEDIUM" />
                <Picker.Item label="High" value="HIGH" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: "#F1F1F1"}}>
          <View style={{margin: 10, alignItems: 'center'}}>
            <Text style={{ fontSize: 20, marginBottom: 5, fontWeight: "bold"}}>Verify</Text>
            <TextInput
              keyboardType='numeric'
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
              onChangeText={(text) => setTripId(text)}
              value={tripId != 0 ? tripId : ""}
            />
            <View style={{marginTop: 5}}>
              <Button
                title="Search"
                color="gray"
                onPress={() => {
                  props.navigation.navigate('TripScreen', { tripId })
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

RangerScreen.navigationOptions = {
  title: "Ranger",
  drawerIcon: ({ tintColor }) => (
    <SimpleLineIcons name="wrench" size={24} color={tintColor} />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
