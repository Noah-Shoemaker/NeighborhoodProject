import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import dataBase from "./DateBase.json";

const HomesList = ({navigation}) => {
  
    return(
        <View style={styles.container}>
            <FlatList
                data = {dataBase.homes}
                //renders items based on house title and directs to article screen when clicked
                renderItem={ ({item}) => <Text style={styles.text} onPress={() => navigation.navigate("Article", item)}> {item.name} </Text> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      alignContent:'center'
    },
    text: {
      fontFamily: "Cochin",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: 'center',
      marginTop: 40,
      textDecorationLine: 'underline'
    }
  });
  
export default HomesList;