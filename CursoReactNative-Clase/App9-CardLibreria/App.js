import React from 'react';
import { ScrollView, View, StyleSheet, Linking } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';

// Importa las imágenes locales
import badBunnyImage from './assets/bad.png';
import rosaliaImage from './assets/rosalia.png';

const ArtistCard = ({ name, genre, description, image, spotifyLink, wikiLink }) => (
  <Card style={styles.card}>
    <Card.Title
      title={name}
      subtitle={genre}
      left={(props) => <IconButton {...props} icon="music" />}
    />
    <Card.Cover source={image} />
    <Card.Content>
      <Paragraph>{description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => Linking.openURL(spotifyLink)}>Spotify</Button>
      <Button onPress={() => Linking.openURL(wikiLink)}>Más Info</Button>
    </Card.Actions>
  </Card>
);

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ArtistCard
        name="Bad Bunny"
        genre="Reggaeton, Trap"
        description="Es un intérprete y compositor de música urbana puertorriqueño. Se le considera uno de los principales nombres del panorama actual del rap, trap y reguetón en español."
        image={badBunnyImage}
        spotifyLink="https://open.spotify.com/intl-es/artist/4q3ewBCX7sLwd24euuV69X"
        wikiLink="https://en.wikipedia.org/wiki/Bad_Bunny"
      />
      <ArtistCard
        name="Rosalía"
        genre="Pop, Flamenco"
        description="Cantante, compositora y productora española que ha revolucionado el mundo del flamenco fusionándolo con pop y otros géneros contemporáneos."
        image={rosaliaImage}
        spotifyLink="https://open.spotify.com/intl-es/artist/7ltDVBr6mKbRvohxheJ9h1"
        wikiLink="https://en.wikipedia.org/wiki/Rosalía"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f5d1e5' },
  card: { marginVertical: 10 }
});
