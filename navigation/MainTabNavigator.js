import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { Platform } from "react-native";
import FireScreen from "../screens/FireScreen";
import MainMap from "../screens/MainMap";
import TripScreen from "../screens/TripScreen";
import ParkScreen from "../screens/ParkScreen";
import PaymentScreen from "../screens/PaymentScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DonateScreen from "../screens/DonateScreen";
import RangerScreen from "../screens/RangerScreen";

import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";
import DonationConfirm from "../screens/DonationConfirm";
import PassOptionsScreen from "../screens/PassOptionsScreen";

import contentComponent from "../components/CustomDrawerContentComponent";
const MyDrawerNavigator = createDrawerNavigator(
  {
    FireScreen,
    MainMap,
    TripScreen,
    ParkScreen,
    PaymentScreen,
    DonateScreen,
    RangerScreen,
    SettingsScreen,
  },
  {
    contentComponent,
    initialRouteName: "MainMap"
  }
);
const Root = createStackNavigator(
  {
    MyDrawerNavigator,
    SearchScreen,
    DetailScreen,
    DonationConfirm,
    PassOptionsScreen
  },
  {
    headerMode: "none",
    initialRouteName: "MyDrawerNavigator",
    headerTitleStyle: {
      ...Platform.select({
        ios: { fontFamily: "Arial" },
        android: { fontFamily: "Roboto" }
      })
    }
  }
);
export default Root;
