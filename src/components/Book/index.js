import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/Octicons';
export default function Book({title, author}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Icon name={'repo'} size={36} color={'#3f51b5'} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.authorView}>
        <Icon name={'person'} size={30} color={'#3f51b5'} style={styles.icon} />
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}
