import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../src/screens/FirstScreen';
import SecondScreen from '../src/screens/SecondScreen';

import { StackActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function RootStackNav(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Second" component={SecondScreen}/>
    </Stack.Navigator>
    )
}