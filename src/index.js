import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Post from './component/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React',
        author: 'Renato',
        text: `Podemos já vislumbrar o modo pelo qual a constante divulgação das informações ainda não demonstrou convincentemente que vai participar na mudança das formas de ação.`,
      },
      {
        id: 2,
        title: 'Aprendendo React 2',
        author: 'André',
        text: `No entanto, não podemos esquecer que o desafiador cenário globalizado possibilita uma melhor visão global do remanejamento dos quadros funcionais.`,
      },
      {
        id: 3,
        title: 'Aprendendo React 3',
        author: 'Cris',
        text: `Não obstante, o aumento do diálogo entre os diferentes setores produtivos pode nos levar a considerar a reestruturação dos métodos utilizados na avaliação de resultados.`,
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
