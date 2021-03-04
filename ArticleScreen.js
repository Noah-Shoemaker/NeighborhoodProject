import React, {useState} from 'react';
import { Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, { Marker, Polyline } from "react-native-maps";
import dataBase from "./DateBase.json";

const ArticleScreen = ({navigation,route}) => {
    
    const [getMapScreen, setMapScreen] = useState(false);
    const markers = dataBase.homes;

    if (getMapScreen === false) {
      return(
          <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
              <Text style={styles.bigText}>{route.params.name}</Text>
              <Text style={styles.bigText}>Address: {route.params.address}</Text>
              <Text style={styles.bigText}>Date Built: {route.params.date}</Text>
              <Text style={styles.bigText}>Architect: {route.params.arch}</Text>
              <TouchableOpacity style={styles.button} onPress={() => setMapScreen(true)}>
                <Text style={styles.buttonText}>Tap to See on Map!</Text>
              </TouchableOpacity>
              <Text style={styles.text}>{route.params.descript}</Text>
          </ScrollView>
      );
    }
    else {

      var marker = markers.filter(home => {return home.key === route.params.key});

      return(

        <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: marker[0].coord.latitude,
                    longitude: marker[0].coord.longitude,
                    latitudeDelta: 0.006,
                    longitudeDelta: 0.006
                }}
                showsUserLocation= {true}
            >
            
            <Marker
                coordinate={marker[0].coord} title={marker[0].name}
                pinColor='green'/>
            
        </MapView>

        

      );
    }
   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40
    },
    scrollContainer: {
      alignItems:'center',
      alignContent:'center'
    },
    bigText: {
      fontFamily: "Cochin",
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20
    },
    text: {
      fontFamily: "Cochin",
      textAlign: 'center',
      fontSize: 18,
      margin: 20
    },
    buttonText: {
      fontFamily: "Cochin",
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      margin: 10
    },
    button: {
      backgroundColor: '#346c24',
      borderWidth: 2,
      borderColor: 'grey',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginTop: 20
    },
    mapButton: {
      position: 'absolute',
      top: 10,
      left: 20,
      backgroundColor: '#346c24',
      borderWidth: 2,
      borderColor: 'grey',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginTop: 20
    }
  });

export default ArticleScreen;