import * as React from 'react';
import { Text, View,StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Holdings from './screens/Holdings';
import Pools from './screens/Pools';
import Tokens from './screens/Tokens';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
<SafeAreaView>

<NavigationContainer >
      <Tab.Navigator style={styles.container} >
        <Tab.Screen name="Holdings" component={Holdings} />
        <Tab.Screen name="Pools" component={Pools} />
        <Tab.Screen name="Tokens" component={Tokens} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );

  
}
const styles = StyleSheet.create({
  container:{
    paddingTop:Platform.OS ==='android' ?StatusBar.currentHeight:0    
  }
})
