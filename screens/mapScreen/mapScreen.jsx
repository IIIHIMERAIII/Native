import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export const MapScreen = () => {
    const route = useRoute();
    const { location } = route.params;
    
    console.log(route.params)

    return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title="Photo Location" coordinate={location} description="Hello" />
        )}
      </MapView>
    </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
