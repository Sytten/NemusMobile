import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text, Picker, Button, TextInput } from "react-native";

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
        <View>
          <Text>People in the park: {people}</Text>
        </View>
        <View>
          <Text>Risk</Text>
          <Picker
            selectedValue={dangerLevel}
            style={{height: 50, width: 200}}
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
        <View>
          <Text>Verify</Text>
          <TextInput
            keyboardType='numeric'
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setTripId(text)}
            value={tripId != 0 ? tripId : ""}
          />
          <Button
            title="Search"
            onPress={() => {
              props.navigation.navigate('TripScreen', { tripId })
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

RangerScreen.navigationOptions = {
  title: "Ranger"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
