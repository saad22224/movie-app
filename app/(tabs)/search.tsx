import MovieCard from '@/components/movieCard'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'

const search = () => {


  const [query, setQuery] = useState('')
  const { data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: refetchMovies,
    reset: resetMovies
  }
    = useFetch(() => fetchMovies({ query: query }), false);


  useEffect(() => {
    const func = async () => {

      if (query.trim()) {
        await refetchMovies();
      } else {
        resetMovies();
      }
    };

    setTimeout(() => func(), 500);
  }, [query]);
  return (
    
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='flex-1 w-full absolute z-0' resizeMethod='cover' />
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard {...item} />

        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        className="px-5"
        scrollEnabled={false}

        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className="w-12 h-10" resizeMode="contain"
                tintColor="#ab8bff" />
            </View>
            <View className='my-5'>
              <SearchBar placeholder='search movies.....' onPress={() => { }}
                value={query} onChange={(text: string) => setQuery(text)} />
            </View>
            {moviesLoading && <ActivityIndicator size='large' color='#ab8bff' className='my-3' />}
            {moviesError && <Text className="text-red-500 px-5 my-3">{moviesError.message}</Text>}



            {!moviesLoading && !moviesError && query.trim() && movies?.length > 0 &&
              <Text className='text-white text-xl font-bold my-3'>Results for "{query}"</Text>}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className='px-5 mt-10'>
              <Text className='text-gray-400 text-center'>{query.trim() ? "No results found" : "Search for movies"}</Text>
            </View>
          ) : null
        }
      />
    </View>


  )
}

export default search

const styles = StyleSheet.create({})