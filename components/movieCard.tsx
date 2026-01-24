import { icons } from '@/constants/icons'
import { Movie } from '@/interfaces/interfaces'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
const MovieCard = ({id , title , poster_path , vote_average , release_date}: Movie) => {
  return (
    // <View>
    //   <Text className="text-blue-300 text-lg">{title}</Text>
    // </View>

    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="w-[30%]">
            <Image source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`
             : 'test' }} className="w-full h-52 rounded-lg"  resizeMethod='cover'/>
             <Text className="text-white mt-2 text-sm font-bold " numberOfLines={1}>{title}</Text>

              <View className="flex-row items-center mt-1">
                <Image source={icons.star} className='size-4'/>
                <Text className="text-white text-xs">{Math.round(vote_average / 2)}</Text>
              </View>

              <View className="flex-row items-center mt-1 justify-between">
                <Text className="text-light-300 text-xs">{release_date.split('-')[0]}</Text>
              </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard