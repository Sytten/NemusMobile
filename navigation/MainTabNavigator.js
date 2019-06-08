import { createDrawerNavigator } from "react-navigation";

import FireScreen from "../screens/FireScreen";
import MainMap from "../screens/MainMap";
import SearchScreen from "../screens/SearchScreen";
import TripScreen from "../screens/TripScreen";
import ParkScreen from "../screens/ParkScreen";
import PaymentScreen from "../screens/PaymentScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DonateScreen from "../screens/DonateScreen";

import contentComponent from "../components/CustomDrawerContentComponent";

const MyDrawerNavigator = createDrawerNavigator(
  {
    FireScreen,
    MainMap,
    SearchScreen,
    TripScreen,
    ParkScreen,
    PaymentScreen,
    DonateScreen,
    SettingsScreen
  },
  { contentComponent, initialRouteName: "MainMap" }
);

export default MyDrawerNavigator;
