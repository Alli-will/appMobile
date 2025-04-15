import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { data } from '../../../data';

type Params = {
  id: string;
};

export default function ProductDetails() {
  const { id } = useLocalSearchParams<Params>();

  if (!id) return <Text>ID não fornecido</Text>;

  const productId = parseInt(id, 10);
  const product = data.products.find(p => p.id === productId);
  const category = product ? data.categories.find(c => c.id === product.idCategory) : null;

  if (!product || !category) {
    return <Text>Produto não encontrado</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: product.image }} 
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.category}>{category.title}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  textContainer: {
    alignItems: 'center', 
    paddingHorizontal: 20,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center', 
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
    color: '#555',
    textAlign: 'center', 
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2ecc71',
    textAlign: 'center', 
  },
});