import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

// Importa la imagen local
import pesoImage from './assets/peso.png';

const MusicInterface = () => {
  const [liked, setLiked] = useState(false); // Estado para el icono de "me gusta"

  const toggleLike = () => {
    setLiked(!liked); // Cambia el estado entre true y false
  };

  return (
    <LinearGradient
      colors={['#8A2BE2', '#FF69B4', '#4B0082']} // Gradiente de morado, rosado y azul oscuro
      style={styles.container}
    >
      {/* Portada del álbum con sombreado */}
      <View style={styles.albumCoverContainer}>
        <Image
          source={pesoImage} // Utiliza la imagen local
          style={styles.albumCover}
        />
        <Text style={styles.songTitle}>Ella Baila Sola</Text>
        <Text style={styles.artistName}>Peso Pluma</Text>
      </View>

      {/* Icono de Me Gusta en el centro */}
      <View style={styles.likeIconContainer}>
        <TouchableOpacity onPress={toggleLike}>
          <Icon name="heart" size={30} color={liked ? 'red' : 'black'} />
        </TouchableOpacity>
      </View>

      {/* Controles de Música (Retroceder, Reproducir, Adelantar) */}
      <View style={styles.controlsContainer}>
        <Pressable onPress={() => alert('Retroceder')}>
          <Icon name="play-back-outline" size={30} color="black" />
        </Pressable>
        <Pressable onPress={() => alert('Reproducir')}>
          <Icon name="play-circle-outline" size={40} color="black" />
        </Pressable>
        <Pressable onPress={() => alert('Adelantar')}>
          <Icon name="play-forward-outline" size={30} color="black" />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumCoverContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  albumCover: {
    width: 200,
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  artistName: {
    fontSize: 14,
    color: '#777',
  },
  likeIconContainer: {
    marginVertical: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default MusicInterface;
