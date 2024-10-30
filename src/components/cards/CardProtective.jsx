import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import protectora from '../../../assets/images/protectors/Protectora-Animalistas.png';

const CardProtective = ({ image }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={protectora} style={styles.protectorImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{image.nombreProtectora}</Text>
          <Text style={styles.cardText}>{image.descripcion}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
  },
  protectorImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CardProtective;

