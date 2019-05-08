import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

/*
<View>
    <Text>{data.title}</Text>
    <Text>{data.author}</Text>
    <Text>{data.text}</Text>
  </View>
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },

  post: {
    margin: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  author: {
    color: '#CAC7C6',
  },

  text: {
    marginTop: 20,
    marginBottom: 20,
  },
});

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.post}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
      <View style={styles.text}>
        <Text>{data.text}</Text>
      </View>
    </View>
  </View>
);

export default Post;
