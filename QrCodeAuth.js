import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import dataBase from "./DateBase.json";
import { NavigationHelpersContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QRCodeAuth = ({navigation}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [read, setRead] = useState(false);

    const createButtonAlert = () =>
        Alert.alert(
            "Getting Started",
            "Please scan QR Code in Tour Guide Booklet to access app.",
            [
                {
                text: "Ok",
                onPress: () => setRead("true"),
                },
            ],
            { cancelable: false }
    );

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    const handleBarCodeScanned = ({data,}) => {

        setScanned(true);

        if (data === dataBase.authentication.qrCode) {
            navigation.navigate("Main");
        }
        else {
            alert("Wrong QR code for authentication, please try again.");
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    if (read === false) {
    
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={createButtonAlert}>
                <   Text style={styles.text}>Press to Start</Text>
                </TouchableOpacity>

                <Button title={'Skip Scan'} onPress={() => navigation.navigate("Main")} />
            </View>
        )
    }
    else {

        return (
            <View style={styles.QRcontainer}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
        );

    }
}

const styles = StyleSheet.create({

    QRcontainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        marginTop: 40,
        marginBottom: 100,
        justifyContent: 'space-evenly',
        alignItems:'center',
        alignContent:'center'
    },
    text: {
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
        borderBottomRightRadius: 20
    }
});

export default QRCodeAuth;