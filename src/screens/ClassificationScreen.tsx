import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Book } from '../types/Book';
import { Classification } from '../data/ClassificationList';
import { ClassificationList } from '../data/ClassificationList';
import ClassificationItem from '../components/ClassificationItem';

function ClassificationScreen(){
  const [bookList, setBookList] = useState<Book[]>([
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', classification: 'Fantasy', pages: 310 },
    { title: '1984', author: 'George Orwell', classification: 'Science fiction', pages: 328 },
    { title: 'Steve Jobs', author: 'Walter Isaacson', classification: 'Biography', pages: 656 },
    { title: 'The Alchemist', author: 'Paulo Coelho', classification: 'Philosophy', pages: 208 },
    { title: 'The Shining', author: 'Stephen King', classification: 'Horror', pages: 447 },
  ]);

  // Count books per classification
  const classificationCounts = ClassificationList.map((item) => {
    const count = bookList.filter((book) => book.classification === item.title).length;
    return { ...item, count };
  });

  const fiction = classificationCounts.filter((item) => 
    item.classification === 'Fiction' && item.count > 0);
  const nonfiction = classificationCounts.filter((item) =>
     item.classification === 'Nonfiction' && item.count > 0);

  return(
<View style={styles.container}>
      <Text style={styles.header}>📚 Classification Summary</Text>

      <Text style={styles.section}>Fiction</Text>
      <FlatList
        data={fiction}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}: {item: Classification}) => <ClassificationItem item={item}/>}
      />

      <Text style={styles.section}>Nonfiction</Text>
      <FlatList
        data={nonfiction}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}: {item: Classification}) => <ClassificationItem item={item}/>}
      />
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
  section: { 
    fontSize: 18, 
    fontWeight: '600', 
    marginTop: 16,
    marginBottom: 8 
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 16, 
    fontWeight: '600' 
  },
  count: { 
    fontSize: 14, 
    color: '#666' 
  },
});


export default ClassificationScreen;
