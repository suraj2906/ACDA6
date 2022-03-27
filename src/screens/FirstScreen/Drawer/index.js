import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default function Drawer({navigation}) {


  return (
    <View style={styles.container}>
        <Text>Drawer</Text>
          <Text style={{color: '#fff', fontSize: 18 }}>Drawer</Text>
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