import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import ArticleScreen from './ArticleScreen';
import MainStackScreen from './MainStackScreen';
import QRCodeAuth from "./QrCodeAuth";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" initialRouteName="QR Code Authentication">
        <RootStack.Screen       //Added modal screen for articles
          name="QR Code Authentication"
          component={QRCodeAuth}
          options={{ headerShown: false }}
        />
        <RootStack.Screen       //Added modal screen for articles
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Article" component={ArticleScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


