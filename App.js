import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CountContextProvider from './src/context/countContextProvider';

import RootStackNav from './navigation/RootStackNav';

//import MainScreen from './src/screens/MainScreen';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {  

  return (
    <NavigationContainer>
     <CountContextProvider>
     <RootStackNav/>
     </CountContextProvider>
   </NavigationContainer>
  );
}


