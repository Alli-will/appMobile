import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo ao Catálogo de Produtos!</Text>
      <Text style={styles.welcome}>Desenvolvedores: Alisson Willian & Eduardo Dutra</Text>
      <Text style={styles.welcome}>Curso: Engenharia de Software</Text>
      <Text style={styles.welcome}>Semestre: 2025</Text>
      <Text style={styles.welcome}>Aspiração: </Text>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});