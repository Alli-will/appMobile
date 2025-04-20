import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native'; 
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
              <Pressable style={styles.productPressable}>
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.productImage}
                  resizeMode="cover"
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
                </View>
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
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
  productItem: {
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  productPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f8f8',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
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