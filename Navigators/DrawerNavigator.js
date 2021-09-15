import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Holdings from '../screens/Holdings';
import Pools from '../screens/Pools';
import TopTabNavigator from './TopTabNavigator';
import Tokens from '../screens/Tokens';
const Drawer = createDrawerNavigator();
export function DrawerNavigator() {
    return (
        <NavigationContainer>

            <Drawer.Navigator>
                <Drawer.Screen  name="Home" component={TopTabNavigator}/>
                <Drawer.Screen name="Holdings" component={Holdings}/>
                <Drawer.Screen name="Pools" component={Pools}/>
                <Drawer.Screen name="Tokens" component={Tokens}/>

            </Drawer.Navigator>
        </NavigationContainer>

    )
}
