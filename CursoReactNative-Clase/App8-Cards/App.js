import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Importa las imágenes locales
import badBunnyImage from './assets/bad.png';
import rosaliaImage from './assets/rosalia.png';

const ArtistCard = ({ name, genre, description, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.genre}>{genre}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <ArtistCard
        name="Bad Bunny"
        genre="Artista de Reguetón"
        description="Es un intérprete y compositor de música urbana puertorriqueño. Se le considera uno de los principales nombres del panorama actual del rap, trap y reguetón en español."
        image={badBunnyImage}
      />
      <ArtistCard
        name="Rosalía"
        genre="Artista de Pop y Flamenco"
        description="Cantante, compositora y productora española que ha revolucionado el mundo del flamenco fusionándolo con pop y otros géneros contemporáneos."
        image={rosaliaImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5d1e5' },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 20, marginVertical: 10 },
  image: { width: '100%', height: 150, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  genre: { fontSize: 14, color: 'gray' },
  description: { fontSize: 14, marginTop: 10 }
});
