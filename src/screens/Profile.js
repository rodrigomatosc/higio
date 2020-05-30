import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Container, Header} from '../components';
import colors from '../colors';

const Profile = () => {
  return (
    <Container>
      <Header text="Profile" />
      <View styles={styles.content}>
        <View style={styles.containerUser}>
          <Image
            style={styles.imageUser}
            source={{
              uri:
                'https://media-exp1.licdn.com/dms/image/C4E03AQGtdoKYlog7cA/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=OmWNv-H3rEiBg9zUPw-BL_f1bw3bm06vPHN_lM8WTPA',
            }}
          />
          <View style={styles.containerTextUser}>
            <Text style={styles.nameUser}>Rodrigo Costa Matos</Text>
            <Text style={styles.descriptionUser}>Description</Text>
          </View>
        </View>
        <View style={styles.containerScore}>
          <Text style={styles.textTitleScore}>Ranking Recycling</Text>
          <Text style={styles.textScore}>300 k</Text>
          <Text style={styles.textObs}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
            maximus ipsum.{' '}
          </Text>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  containerUser: {
    margin: 20,
    flexDirection: 'row',
  },
  containerTextUser: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  imageUser: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  nameUser: {
    color: colors.textTitle,
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionUser: {
    fontSize: 16,
    color: colors.textOpacity,
    marginTop: 4,
  },
  containerScore: {
    margin: 20,
  },
  textTitleScore: {
    color: colors.textInputColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textScore: {
    color: colors.textTitle,
    fontSize: 60,
    fontWeight: '800',
  },
  textObs: {
    color: colors.textInputColor,
    textAlign: 'left',
    marginRight: 100,
    fontSize: 18,
    fontWeight: '300',
  },
});
export default Profile;
