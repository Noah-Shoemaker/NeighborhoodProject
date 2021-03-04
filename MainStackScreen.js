import React, {useState, useEffect, useRef} from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import QRScannerScreen from './QRScannerScreen';
import MapScreen from './MapScreen';
import ArchiveStack from './ArchiveStack';
import { TextInput } from 'react-native-gesture-handler';
import dataBase from "./DateBase.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import QrCodeAuth from './QrCodeAuth';

const Tab = createBottomTabNavigator();

function MainStackScreen() {

        return (
            <Tab.Navigator tabBarOptions={{
                            labelStyle: styles.tabText,
                            tabStyle: styles.tabContainer
                            }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Archive" component={ArchiveStack}/>
                <Tab.Screen name='QR Scan' component={QRScannerScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
                
            );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems:'center',
        alignContent:'center'
    },
    tabContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: "#346c24"
    },
    tabText: {
      fontFamily: "Cochin",
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
      paddingBottom: 10,
      color: 'white'
    },
    text: {
      fontFamily: "Cochin",
      fontWeight: 'bold',
      textAlign: 'center',
      width: 300,
      fontSize: 15,
      marginBottom: 10
    },
    textInput: {
        height: 40,
        width: 150,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    logo: {
        width: 280,
        height: 280,
        marginBottom: 30
    }
  });


export default MainStackScreen;