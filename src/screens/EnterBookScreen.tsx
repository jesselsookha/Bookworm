import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ClassificationList } from '../data/ClassificationList';
import { Book } from '../types/Book';

function EnterBookScreen(){
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [classification, setClassification] = useState(ClassificationList[0].title);
  const [pages, setPages] = useState('');
  const [bookList, setBookList] = useState<Book[]>([]);

  const handleAddBook = () => {
    // basic validation - checking for empty values
    if (!title || !author || !pages) return;

    // load temporary object
    const newBook: Book = {
      title,
      author,
      classification,
      pages: parseInt(pages),
    };

    setBookList([...bookList, newBook]); // save temp obj to array of objects
    setTitle('');
    setAuthor('');
    setPages('');
    setClassification(ClassificationList[0].title);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.header}>Enter Book Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />

      <Picker
        selectedValue={classification}
        onValueChange={(itemValue) => setClassification(itemValue)}
        style={styles.picker}
      >
        {ClassificationList.map((item) => (
          <Picker.Item key={item.id} label={item.title} value={item.title} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Number of Pages"
        value={pages}
        onChangeText={setPages}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleAddBook}>
        <Text>Add Book</Text>
      </TouchableOpacity>

      <Text style={styles.total}>Total Books Entered: {bookList.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
  },
  header: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 12 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  picker: {
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  total: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

});

export default EnterBookScreen;
