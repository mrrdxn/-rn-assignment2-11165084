import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [myName] = useState('Mensah Stephen Tetteh');
  return (
    <View style={styles.container}>
      <Text style={styles.sizeText}>My name is <Text style={styles.boldText}>{myName}</Text></Text>
      <StatusBar style="auto" />

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
  sizeText: {
    fontSize: 24
  },
  boldText: {
    fontWeight: 'bold'
  }
});
