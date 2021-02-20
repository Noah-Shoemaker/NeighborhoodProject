import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';

const ArticleScreen = ({navigation,route}) => {
    
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.bigText}>{route.params.name}</Text>
            <Text style={styles.bigText}>Address: {route.params.address}</Text>
            <Text style={styles.bigText}>Date Built: {route.params.date}</Text>
            <Text style={styles.bigText}>Architect: {route.params.arch}</Text>
            <Text style={styles.text}>{route.params.descript}</Text>
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
    }
  });

export default ArticleScreen;