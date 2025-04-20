import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native';
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
              params: { 
                categoryid: item.id.toString(),
                title: item.title,
                cover: item.cover 
              }
            }}
            asChild
          >
            <Pressable style={styles.categoryItem}>
              <Image 
                source={{ uri: item.cover }} 
                style={styles.categoryImage}
                resizeMode="cover"
              />
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
    padding: 20,
    backgroundColor: '#fff'
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#333'
  },
  categoryItem: { 
    padding: 15, 
    backgroundColor: '#f8f8f8', 
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15
  },
  categoryText: { 
    fontSize: 18,
    fontWeight: '500',
    color: '#444'
  },

  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center'
  }

  
});