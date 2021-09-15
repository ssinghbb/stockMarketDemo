import React from 'react'
import { View, Text ,Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Holdings from '../screens/Holdings'
import Pools from '../screens/Pools'
import Tokens from '../screens/Tokens'
import { DrawerNavigator } from './DrawerNavigator'
const Tab=createMaterialTopTabNavigator();
 function MyTabs() {
    return (
            <Tab.Navigator initialRouteName="Holdings"
            tabBarOptions={{
            }}>
                    <Tab.Screen name="Holdings" component={Holdings}></Tab.Screen>
                    <Tab.Screen name="Pools" component={Pools}></Tab.Screen>
                    <Tab.Screen name="Tokens" component={Tokens}></Tab.Screen>
            </Tab.Navigator>
        )
}
export default function TopTabNavigator(){
    return(
            <MyTabs/>
     )
}