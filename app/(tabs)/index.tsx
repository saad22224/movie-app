import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { ScrollView } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/movieCard";
export default function App() {
  const router = useRouter();


  const { data: movies,
    loading: moviesLoading,
    error: moviesError }
    = useFetch(() => fetchMovies({ query: '' }

    )
    );
  console.log("movies:", movies);
  console.log("loading:", moviesLoading);
  console.log("error:", moviesError);

  return (
    <View className="flex-1  bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView className="flex-1 px-5"
        showsVerticalScrollIndicator={false} contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10
        }}>
        <Image source={icons.logo} className="w-12 h-10 mt-10 mb-5  mx-auto"
          resizeMode="contain" />

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
        ) : moviesError ? (
          <Text className="text-white text-center mt-10">Error {moviesError.message}</Text>
        ) : <View className="flex-1 mt-5">
          <SearchBar onPress={() => router.push('/search')} placeholder="Search for amovie" />

          <>
            <Text className="text-white font-bold text-lg mt-5 mb-3">Popular Movies</Text>
            {movies && (
              <>

                <FlatList
                  data={movies}
                  renderItem={({ item }) => (
                    <MovieCard {...item} />

                  )}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: 'flex-start',
                    gap: 20,
                    paddingRight:5,
                    marginBottom: 10
                  }}
                  className="mt-2 pb-32"
                  scrollEnabled={false}
                />
              </>
            )}
          </>


        </View>}


      </ScrollView>

    </View>
  );
}