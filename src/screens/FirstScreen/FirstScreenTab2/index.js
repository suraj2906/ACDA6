import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';



export default function FirstScreenTab2({navigation}) {


  return (
    <View style={styles.container}>
        <Text>Second Tab</Text>
          <Text style={{color: '#fff', fontSize: 18 }}>Second Tab</Text>
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