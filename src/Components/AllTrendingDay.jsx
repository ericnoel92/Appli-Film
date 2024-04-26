import React, { useEffect, useState } from "react";
import { getAllTrending } from "./API/getAllTrending";
import { Text, View, Image, ScrollView } from 'react-native';

export default function AllTrendingDay() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllTrending();
                setMovies(response.results);
            } catch(error) {
                console.error('Erreur lors de la récupération des données:', error); 
            }
        }
        fetchData();
    }, []);

    return (
        <ScrollView>
            {movies.length > 0 ? (
                movies.map((movie, index) => (
                    <View key={index} style={{ marginBottom: 20 }}>
                        <Text>Titre: {movie.title}</Text>
                        <Text>Langue originale: {movie.original_language}</Text>
                        <Text>Résumé: {movie.overview}</Text>
                        <Text>Date de sortie: {movie.release_date}</Text>
                        <Text>Popularité: {movie.popularity}</Text>
                        {movie.poster_path && (
                            <Image
                                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                style={{ width: 200, height: 300, marginTop: 10 }}
                            />
                        )}
                    </View>
                ))
            ) : (
                <Text>Aucun film trouvé.</Text>
            )}
        </ScrollView>
    );
}
