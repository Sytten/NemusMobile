import MapView, { Marker, ProviderPropType } from "react-native-maps";
import React from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import {
  FontAwesome,
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import markerImg from "../assets/images/marker.png";
import CurrentFireDanger from "../components/CurrentFireDanger";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    drawerLabel: "Main Map",
    drawerIcon: ({ tintColor }) => (
      <Feather name="map" size={24} color={tintColor} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      coordinates: [
        {
          latitude: 37.78825,
          longitude: -122.4324
        },
        {
          latitude: 47.78825,
          longitude: -122.4324
        }
      ]
    };
  }

  getParks() {
    return fetch("http://api.nemus.world/parks")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ coordinates: json });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getParks();
  }

  toSearch = () => {
    this.props.navigation.navigate("SearchScreen");
  };

  openSidebar = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          // ref={c => (this.mapView = c)}
          style={{ flex: 1, height: 200 }}
          moveOnMarkerPress={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          onCalloutPress={() => {
            this.props.navigation.navigate("DetailScreen");
          }}
        >
          {this.state.coordinates.map(function(item, i) {
            return (
              <Marker
                key={i}
                coordinate={item}
                centerOffset={{ x: -18, y: -60 }}
                anchor={{ x: 0.69, y: 1 }}
                image={markerImg}
                title={item.name}
                description={item.name}
              >
                <Text style={styles.marker}>X</Text>
              </Marker>
            );
          })}
        </MapView>
        <View
          style={{
            position: "absolute",
            top: 20,
            width: "100%",
            alignItems: "center",
            // backgroundColor: "green",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: "95%",
              height: 50,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity onPress={this.openSidebar}>
              <FontAwesome name="navicon" size={28} color="grey" />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, color: "grey" }}>
              Welcome to Yosemite!
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ height: 50 }} onPress={this.toSearch}>
          <Text style={{ fontSize: 30, color: "#00A6FF", textAlign: "center" }}>
            Not there?
          </Text>
        </TouchableOpacity>
        <CurrentFireDanger />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  icon: {
    width: 24,
    height: 24
  }
});
