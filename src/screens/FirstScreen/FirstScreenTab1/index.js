import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

  


export default function FirstScreenTab1({navigation}) {


  return (
    <View style={styles.container}>
        <Text>First Tab</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Second")} style={{ backgroundColor: 'blue', padding: 20}}>
          <Text style={{color: '#fff', fontSize: 18 }}>Go to page 2</Text>
        </TouchableOpacity>
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
