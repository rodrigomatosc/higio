import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Container, Header, ItemRanking} from '../components';

const data = [
  {
    name: 'Rodrigo Costa Matos',
    image: '',
    email: 'email@gmail.com',
    score: 300,
  },
  {
    name: 'Isaac Newton',
    image: '',
    email: 'email@gmail.com',
    score: 200,
  },
  {
    name: 'Erick Lima',
    image: '',
    email: 'email@gmail.com',
    score: 100,
  },
];

const Ranking = () => {
  return (
    <Container>
      <Header text="Ranking" />
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <ItemRanking user={item} index={index} />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
export default Ranking;
