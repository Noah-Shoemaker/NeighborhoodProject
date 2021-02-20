import React from 'react';
import { Text, ScrollView, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
            <Image source={require('./assets/NSNA_Logo.png')} style={styles.logo}/>
            <Text style={styles.bigText}>Welcome to the Near South Neighborhood Association Virtual Tour!</Text>
            <Text style={styles.text}> Check out the Archive to see all information about the houses and other features that are in Near South Lincoln!</Text>
            <Text style={styles.text}> There are QR codes on signs across the neighborhood! Use the QR scanner on these codes to learn more.  </Text>
            <Text style={styles.text}> Use the Map to find different house or features!</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      alignItems:'center',
      alignContent:'center'
    },
    scrollContainer: {
      alignItems:'center',
      alignContent:'center'
    },
    bigText: {
      fontFamily: "Cochin",
      fontWeight: 'bold',
      textAlign: 'center',
      width: 300,
      fontSize: 25,
      marginBottom: 10
    },
    text: {
      fontFamily: "Cochin",
      textAlign: 'center',
      width: 300,
      fontSize: 20,
      marginBottom: 10
    },
    logo: {
      width: 280,
      height: 280,
      marginBottom: 30
    }
  });

export default HomeScreen;