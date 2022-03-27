import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import { useCountContext } from '../../context/countContextProvider';


export default function MainScreen() {
  const [count, setCount] = useState(0); 
  const CountContext = useCountContext();
  console.log(CountContext); 

  return (
    <View style={styles.container}>
      <Text>{ CountContext.count }</Text>
      <Button onPress={()=>CountContext.setCount(CountContext.count+1)} title='CLICK ME'></Button>
      <Text>{ CountContext.count2 }</Text>
      <Button onPress={()=>CountContext.setCount2(CountContext.count2+1)} title='CLICK ME'></Button>
      <Text>{ CountContext.count3 }</Text>
      <Button onPress={()=>CountContext.setCount3(CountContext.count3+1)} title='CLICK ME'></Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
