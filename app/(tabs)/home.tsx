import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo ao Catálogo de Produtos!</Text>
      
      

      <Link href="/(stack)/categories" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ver Categorias</Text>
        </Pressable>
      </Link>
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
  button: {
    padding: 15,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  }
});