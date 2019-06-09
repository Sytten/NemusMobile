import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text, Image, View, Dimensions, Picker } from "react-native";
// import * as AppAuth from "expo-app-auth";
const { width, height } = Dimensions.get('window');
import NumericInput from 'react-native-numeric-input'
import DatePicker from 'react-native-datepicker'

import { Feather, MaterialCommunityIcons, Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";


export default function PassOptionsScreen() {
  return (
    <ScrollView style={styles.container}>
        <Text style={{fontSize: 32, padding: 5, fontWeight: 'bold', marginBottom: 15}}>Pfeiffer Big Sur State Park</Text>


       <View style={{flex: 1, flexDirection: 'column', marginBottom: 5, }}>
             
            
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 5, height: 70}}>
              <FontAwesome name="group" size={24} color={'#0056FF'} style={{width:36, textAlign: 'center'}} />
              <NumericInput type='up-down' onChange={value => console.log(value)} />
            </View>
            
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 5, height: 60}}>
              <Entypo name="calendar" size={24} color={'#0056FF'} style={{width:36, textAlign: 'center'}} />
              <DatePicker
                style={{width: 200}}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                showIcon={false}
                cancelBtnText="Cancel" />
            </View>
            
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 5, height: 70}}>
              <AntDesign name="car" size={24} color={'#0056FF'} style={{width:36, textAlign: 'center'}} />
              <NumericInput type='up-down' onChange={value => console.log(value)} />
            </View>

          </View>
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
