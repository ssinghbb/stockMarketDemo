import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View,StyleSheet, Platform, StatusBar, SafeAreaView, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopTabNavigator from './Navigators/TopTabNavigator';
import {DrawerNavigator} from './Navigators/DrawerNavigator'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const Drawer=createDrawerNavigator();

export default function App() {
  return (
<SafeAreaProvider style={styles.container}>
  <DrawerNavigator/>
</SafeAreaProvider>


  );

  
}
const styles = StyleSheet.create({
  container:{
    padding:1
  }
})
