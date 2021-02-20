import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const PasswordScreen = (props) => {

    return(
        <View style={styles.container}>
                        <Image source={require('./assets/NSNA_Logo.png')} style={styles.logo}/>
                        <Text style={styles.text}>Please enter the password from the booklet to access app.</Text>
                        <TextInput onSubmitEditing={event => props.checkPassword(event.nativeEvent.text)}  //checks against password when submitted
                        style={styles.textInput}
                        onChangeText={text => props.onChangeText(text)}
                        value={props.value}
                        textContentType='password' 
                        secureTextEntry={true}
                        placeholder="Enter password"
                        />
        </View>
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

  export default PasswordScreen;