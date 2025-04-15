import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { data } from '../../../data/index';

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/(stack)/categories/[categoryid]",
              params: { categoryid: item.id.toString() }
            }}
            asChild
          >
            <Pressable style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item.title}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  categoryItem: { 
    padding: 15, 
    backgroundColor: '#f0f0f0', 
    marginBottom: 10,
    borderRadius: 8
  },
  categoryText: { 
    fontSize: 18 
  }
});