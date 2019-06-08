import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
// import * as AppAuth from "expo-app-auth";
export default function DetailScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <TouchableOpacity>
        <Text>Detail</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

DetailScreen.navigationOptions = {
  title: "Details"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
