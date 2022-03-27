import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Drawer from './Drawer';
import FirstScreenTab1 from './FirstScreenTab1';
import FirstScreenTab2 from './FirstScreenTab2';


const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();

export default function FirstScreen(){
    return(
        
            // <Draw.Navigator>
            // <Draw.Screen name ='Drawer' component={Drawer}/>
        <Tab.Navigator>
            <Tab.Screen name='Tab1' component={FirstScreenTab1}/>
            <Tab.Screen name='Tab2' component={FirstScreenTab2}/>
        </Tab.Navigator>
            // </Draw.Navigator>
        
    )
}