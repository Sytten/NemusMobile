import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
// import * as AppAuth from "expo-app-auth";
export default function LinksScreen() {
  // const login = async () => {
  //   AppAuth.authAsync({
  //     issuer: "https://accounts.google.com",
  //     clientId:
  //       "610529020430-vkv45o3qn8kqhkf5ag4lue94dffc3f2r.apps.googleusercontent.com",
  //     scopes: ["profile"]
  //   });
  // };
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
