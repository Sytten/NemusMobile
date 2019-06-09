import React, { useState } from "react";
import { Text, Image, View, Dimensions, Picker, ScrollView } from "react-native";
import NumericInput from "react-native-numeric-input";
import DatePicker from "react-native-datepicker";

import {
  Feather,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
  Ionicons,
  AntDesign
} from "@expo/vector-icons";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function PassOptionsScreen(props) {
  confirm = () => {
    fetch(`http://api.nemus.world/users/1/trips`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        passId: id,
        endDate,
        startDate,
        numberPeople: noPeople,
        licensePlate
      })
    })
      .then(console.log)
      .then(toMain);
  };
  toMain = () => {
    props.navigation.navigate("MainMap");
  };
  const pass = props.navigation.getParam("pass");
  const data = props.navigation.getParam("data");
  const { id } = pass;
  const [noPeople, setNoPeople] = useState(1);
  const [licensePlate, setLicense] = useState("CP000011");
  const [startDate, setStartDate] = useState("2019-5-10");
  const [endDate, setEndDate] = useState("2019-5-11");
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", flex: 1, padding: 10 }}>
        {data.name}
      </Text>
      <Image
          style={{ width: width, height: 160 }}
          source={{
            uri:
              `https://storage.googleapis.com/nemus-parks-images/${data.imageTag}`
          }}
        />
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <FontAwesome
          name="group"
          size={24}
          color={"#0056FF"}
          style={{ width: 50, textAlign: "center" }}
        />
        <NumericInput
          type="up-down"
          value={noPeople}
          style={{height: 32}}
          onChange={value => setNoPeople(value)}
        />
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <Entypo
          name="calendar"
          size={24}
          color={"#0056FF"}
          style={{ width: 50, textAlign: "center" }}
        />
        <DatePicker
          style={{ width: 200 }}
          date={startDate}
          onDateChange={date => setStartDate(date)}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2018-05-01"
          maxDate="2019-06-01"
          confirmBtnText="Confirm"
          showIcon={false}
          cancelBtnText="Cancel"
        />
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <Entypo
          name="calendar"
          size={24}
          color={"#0056FF"}
          style={{ width: 50, textAlign: "center" }}
        />
        <DatePicker
          style={{ width: 200 }}
          date={endDate}
          onDateChange={date => setEndDate(date)}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2018-05-01"
          maxDate="2019-06-01"
          confirmBtnText="Confirm"
          showIcon={false}
          cancelBtnText="Cancel"
        />
      </View>
      {pass.type === "CAR" && (
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginTop: 15 }}>
          <AntDesign
            name="car"
            size={30}
            color={"#0056FF"}
            style={{ width: 50, textAlign: "center" }}
          />
          <TextInput value={licensePlate} onChangeText={t => setLicense(t)} />
        </View>
      )}
      <View style={{ flex: 1, alignSelf: "center", marginTop: 15}}>
        <TouchableOpacity
          style={{
            backgroundColor: "tomato",
            width: width,
            height: 60,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={confirm}
        >
          <Text style={{ fontSize: 26, color: "white"}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
