import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { data } from '../../../../data/index';

export default function CategoryProducts() {
  const { categoryid } = useLocalSearchParams<{ categoryid: string }>();
  const category = data.categories.find(cat => cat.id === Number(categoryid));

  if (!category) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Categoria não encontrada!</Text>
      </View>
    );
  }

  const produtos = data.products.filter(prod => prod.idCategory === category.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Link
              href={{
                pathname: "/(stack)/product/[id]",
                params: { id: item.id.toString() }
              }}
              asChild
            >
              <Pressable>
                <Text style={styles.productText}>
                  {item.title} - R$ {item.price.toFixed(2)}
                </Text>
              </Pressable>
            </Link>
          </View>
        )}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productText: {
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  backText: {
    color: 'white',
    textAlign: 'center',
  },
});