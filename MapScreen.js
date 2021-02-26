import React from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker, Polyline } from "react-native-maps";
import dataBase from "./DateBase.json";

const MapScreen = ({navigation}) => {

    const markers = dataBase.homes;

    return(

            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 40.805890,
                    longitude: -96.702722,
                    latitudeDelta: 0.014109,
                    longitudeDelta: 0.02047
                }}
                showsUserLocation={true}
            >
                
                {markers.map((marker) => (<Marker onCalloutPress={() => navigation.navigate("Article",marker)} 
                                                            coordinate={marker.coord} title={marker.name}
                                                            description={"Click for more info"}/>) ) }
                
            </MapView>

    );
};

export default MapScreen;

// <Polyline coordinates={coords} strokeWidth='5' strokeColor='#346c24'/>