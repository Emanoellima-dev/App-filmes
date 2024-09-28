import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, StatusBar, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import TMDB_API_KEY from './Apikey'

export default function Feed() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);


  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar filmes populares:', error);
    }
  };



 const renderItem = ({ item }) => (
	
    <View style={styles.movieCard}>
      <StatusBar barStyle="light-content" backgroundColor="black"
     />
   
      
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
      />
    

      <Text style={styles.releaseDate}>Lançamento: {item.release_date}</Text>
    </View>
  );

  return (
      <View style={{ backgroundColor: "black" }}>

       <Text style={styles.text}>O que você quer assistir?</Text>

       <View style={styles.containerInput}>
         <TextInput
	  placeholderTextColor="white"
	  placeholder="Buscar Filmes"
          style={styles.input}
	 />

	 <Ionicons name="search" color="white" size={24}/>
       </View>

       
       <FlatList
         data={movies}
         renderItem={renderItem}
         keyExtractor={item => item.id.toString()}
         contentContainerStyle={styles.container}
         numColumns={2}
      />

      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "black",
    alignItems: 'center',
  },
  movieCard: {
    marginBottom: 20,
    backgroundColor: "black",
    alignItems: 'center',
    margin: 10,
  },
  poster: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  movieTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  releaseDate: {
    fontSize: 12,
    color: 'grey',
  },
  text: {
   backgroundColor: "black",
   color: 'white',
   fontWeight: 'bold',
   marginStart: 9,
   fontSize: 23,
  },
  containerInput: {
   backgroundColor: "#676860",
   height: 45,
   padding: 11,
   borderRadius: 16,
   marginTop: 24,
   marginBottom: 20,
   alignItems: "center",
   justifyContent: "space-between",
   flexDirection: "row",
  },
  input: {
   color: "#FFF",
   width: "80%",
   paddingLeft: 15,
  }
});
