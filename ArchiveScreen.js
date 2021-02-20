import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import HomesList from './HomesList';

const ArchiveScreen = ({navigation}) => {
    
    return(

        <View style={styles.container}>

              <Text style={styles.bigText}>Welcome to the Archive!</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homes List')}>
                <Text style={styles.text}>Homes List</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feature List')}> 
                <Text style={styles.text}>Feature List</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      marginBottom: 100,
      justifyContent: 'space-evenly',
      alignItems:'center',
      alignContent:'center'
    },
    bigText: {
      fontFamily: "Cochin",
      fontWeight: 'bold',
      textAlign: 'center',
      width: 300,
      fontSize: 25
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
export default ArchiveScreen;