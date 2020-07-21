import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import styles from './styles';

import Book from './../../components/Book';

export default function Feed() {
  const data = [
    {
      id: 1,
      title: 'Harry Potter e a pedra filosofal',
      author: 'J.K Rowling',
    },
    {
      id: 2,
      title: 'Game of Thrones',
      author: 'George R. R. Martin',
    },
    {
      id: 3,
      title: 'A feast for crows',
      author: 'George R. R. Martin',
    },
  ];
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
