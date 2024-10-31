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
    width:160,
    height:240,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3, 
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  card: {
  },
  protectorImage: {
    width: '100%',
    height: 140,
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

