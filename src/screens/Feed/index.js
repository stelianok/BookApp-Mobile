import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import api from './../../services/api';

import styles from './styles';

import Book from './../../components/Book';

export default function Feed() {
  const [data, setData] = useState();
  async function GetBooks() {
    try {
      const response = await api.get('/books');
      //console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  useEffect(() => {
    GetBooks().then((data) => {
      setData(data);
    });
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Book title={item.title} author={item.author} />
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.5}
        extraData={data}
      />
    </SafeAreaView>
  );
}
