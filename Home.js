import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20, fontSize: 30}}>Welcome!</Text>
	  <Text style={{marginBottom: 30, fontSize: 30}}>Choose your experience!</Text>
      <StatusBar style="auto" />
		<TouchableOpacity
			onPress={() => alert('Hello, world!')}
			style={styles.buttonHeights}>
			<Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold" }}>Heights</Text>
		</TouchableOpacity>
			<TouchableOpacity
			onPress={() => alert('Hello, world!')}
			style={styles.buttonBlood}>
			<Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold" }}>Blood</Text>
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
  	buttonHeights: {
	  	backgroundColor: '#366BD6',
		padding: 10,
		margin: 10,
		width: 250,
		justifyContent: "center",
		alignItems: "center",
  	},
	buttonBlood: {
		backgroundColor: '#921A26',
		padding: 10,
		margin: 10,
		width: 250,
		justifyContent: "center",
		alignItems: "center",
	},
});
