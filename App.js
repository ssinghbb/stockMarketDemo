import * as React from 'react';
import { Text, View,StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopTabNavigator from './Navigators/TopTabNavigator';
const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
<SafeAreaProvider style={styles.container}>
  <View>
    <Text>Hello</Text>
  </View>
  <TopTabNavigator/>
</SafeAreaProvider>


  );

  
}
const styles = StyleSheet.create({
  container:{
    paddingTop:Platform.OS ==='android' ?StatusBar.currentHeight:0    
  }
})
