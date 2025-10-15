import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Book } from '../types/Book';

function HomeScreen(){
  const [bookList, setBookList] = useState<Book[]>([
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', classification: 'Fantasy', pages: 310 },
    { title: '1984', author: 'George Orwell', classification: 'Science fiction', pages: 328 },
    { title: 'Steve Jobs', author: 'Walter Isaacson', classification: 'Biography', pages: 656 },
  ]);

  const totalBooks = bookList.length;
  const totalPages = bookList.reduce((sum, book) => sum + book.pages, 0);
  const averagePages = totalBooks > 0 ? Math.round(totalPages / totalBooks) : 0;
  const lastBook = bookList[bookList.length - 1];

  return(
    <View style={styles.container}>
      <Text style={styles.header}>📚 Reading Stats</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Last Book Read:</Text>
        {lastBook ? (
          <>
            <Text style={styles.value}>{lastBook.title}</Text>
            <Text style={styles.subvalue}>by {lastBook.author}</Text>
          </>
        ) : (
          <Text style={styles.value}>No books yet</Text>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Books:</Text>
        <Text style={styles.value}>{totalBooks}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Pages Read:</Text>
        <Text style={styles.value}>{totalPages}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Average Pages per Book:</Text>
        <Text style={styles.value}>{averagePages}</Text>
      </View>
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
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  label: { 
    fontSize: 16, 
    fontWeight: '600' 
  },
  value: { 
    fontSize: 18, 
    marginTop: 4 
  },
  subvalue: { 
    fontSize: 14, 
    color: '#666' 
  },
});

export default HomeScreen;
