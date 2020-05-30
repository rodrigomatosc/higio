import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from '../colors';

const ItemRanking = ({user, index}) => {
  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const {name, email, score} = user;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            index % 2 != 0 ? colors.itemCellFlatList : colors.primaryColor,
        },
      ]}>
      <View style={[styles.image, {backgroundColor: getRandomColor()}]}>
        <Text style={styles.textImage}>{name[0]}</Text>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.containerScore}>
        <Text style={styles.score}>{score}</Text>
        <Image
          style={styles.imageScore}
          source={require('../assets/images/ranking.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textImage: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
  containerText: {
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  email: {
    color: colors.textInputColor,
    marginTop: 4,
  },
  containerScore: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  imageScore: {
    width: 30,
    height: 30,
  },
  score: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ItemRanking;
