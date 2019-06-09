import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text, Image, View, Dimensions } from "react-native";
// import * as AppAuth from "expo-app-auth";
const { width, height } = Dimensions.get('window');
import { Feather, MaterialCommunityIcons, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";


export default function PassOptionsScreen() {
  return (
    <ScrollView style={styles.container}>
       <Text style={{fontSize: 24}}>Pass options</Text>
    </ScrollView>
  );
}

PassOptionsScreen.navigationOptions = {
  title: "PassOptions"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
