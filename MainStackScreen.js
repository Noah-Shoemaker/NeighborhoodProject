import React, {useState, useEffect, useRef} from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import QRScannerScreen from './QRScannerScreen';
import MapScreen from './MapScreen';
import ArchiveStack from './ArchiveStack';
import { TextInput } from 'react-native-gesture-handler';
import dataBase from "./DateBase.json";
import AsyncStorage from '@react-native-community/async-storage';
import PasswordScreen from './PasswordScreen';

const Tab = createBottomTabNavigator();
const STORAGE_KEY = '@authState';

function MainStackScreen() {

    const [auth, setauth] = useState(false);
    const [value, onChangeText] = useState('');
    const ref = useRef(auth);

    const readData = async () => {
        try {

          const authState = await AsyncStorage.getItem(STORAGE_KEY)
      
          if (authState !== null) {
              if (authState === "true") {
                  setauth(true)
              }
              else {
                  setauth(false)
              }
          }

        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
    }

    const saveData = async (auth) => {
        try {
            if (auth) {
                await AsyncStorage.setItem(STORAGE_KEY, "true")
            }
            else {
                await AsyncStorage.setItem(STORAGE_KEY, "false")
            }
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
    }
      
    useEffect( () => {readData()}, []);
    
    function checkPassword(e) {

        setauth(e === dataBase.authentication.password);
        ref.current = (e === dataBase.authentication.password);
        saveData(e === dataBase.authentication.password);
        
        //Uses current reference becuase auth doesnt update fast enough
        if (ref.current === false) {
            alert("Wrong password, please try again.");
        }
    }
    
    //renders password screen when auth is false and home screen is true
    if (auth === false) {
      return(
            <PasswordScreen checkPassword={checkPassword} onChangeText={onChangeText} value={value}/>
      )
    }
    
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