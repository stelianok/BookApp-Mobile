iniimport React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.formView}>
        <Text style={styles.title}>Add a new book</Text>

        <TextInput
          style={[styles.textInput, {width: width - 55}]}
          onChangeText={(title) => setTitle(title)}
          value={title}
          placeholder={'Title - E.g: Harry Potter'}
          placeholderTextColor={'gray'}
          underlineColorAndroid={'black'}
        />

        <TextInput
          style={[styles.textInput, {width: width - 55}]}
          onChangeText={(author) => setAuthor(author)}
          value={author}
          placeholder={'Author - E.g: J.K Rowling'}
          placeholderTextColor={'gray'}
          underlineColorAndroid={'black'}
        />

        <TouchableOpacity
          style={[styles.button, {width: width - 55}]}
          onPress={() => {}}>
          <Text style={styles.buttonText}> Add the new book </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
