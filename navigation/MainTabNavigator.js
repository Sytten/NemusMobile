import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import FireScreen from "../screens/FireScreen";
import MainMap from "../screens/MainMap";
import TripScreen from "../screens/TripScreen";
import ParkScreen from "../screens/ParkScreen";
import PaymentScreen from "../screens/PaymentScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DonateScreen from "../screens/DonateScreen";

import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";

import contentComponent from "../components/CustomDrawerContentComponent";
const MyDrawerNavigator = createDrawerNavigator(
  {
    FireScreen,
    MainMap,
    TripScreen,
    ParkScreen,
    PaymentScreen,
    DonateScreen,
    SettingsScreen
  },
  { contentComponent, initialRouteName: "MainMap" }
);
const Root = createStackNavigator(
  { MyDrawerNavigator, SearchScreen, DetailScreen },
  { headerMode: "none", initialRouteName: "MyDrawerNavigator" }
);
export default Root;
