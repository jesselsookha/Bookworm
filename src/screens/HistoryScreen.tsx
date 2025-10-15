import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Book } from '../types/Book';

function HistoryScreen(){
  const [bookList, setBookList] = useState<Book[]>([
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', classification: 'Fantasy', pages: 310 },
    { title: '1984', author: 'George Orwell', classification: 'Science fiction', pages: 328 },
    { title: 'Steve Jobs', author: 'Walter Isaacson', classification: 'Biography', pages: 656 },
    { title: 'The Alchemist', author: 'Paulo Coelho', classification: 'Philosophy', pages: 208 },
  ]);

  const recentBooks = bookList.slice(-3).reverse();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📖 Last 3 Books Read</Text>
      {recentBooks.length === 0 ? (
        <Text style={styles.empty}>No books entered yet.</Text>
      ) : (
        <FlatList
          data={recentBooks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>by {item.author}</Text>
              <Text style={styles.classification}>{item.classification}</Text>
            </View>
          )}
        />
      )}
    </View>
  );

}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
  },
  header: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 16 
  },
  empty: { 
    fontSize: 16, 
    color: '#666' 
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  title: { 
    fontSize: 18, 
    fontWeight: '600' 
  },
  author: { 
    fontSize: 16, 
    color: '#333' 
  },
  classification: { 
    fontSize: 14, 
    color: '#888' 
  },
});

export default HistoryScreen;
