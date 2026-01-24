import { Movie } from '@/interfaces/interfaces'
import { Link } from 'expo-router'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
const MovieCard = ({id , title , poster_path , vote_average , release_date}: Movie) => {
  return (
    // <View>
    //   <Text className="text-blue-300 text-lg">{title}</Text>
    // </View>

    <Link href={`/movie/${id}`} asChild>
        <TouchableOpacity className="w-[30%]">
            <Image source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'test' }} style={{ width: 100, height: 150 }} />
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard