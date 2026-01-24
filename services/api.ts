

export const tmdb_config = {
  base_url: 'https://api.themoviedb.org/3/',
  'api_key': process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  'header': {
    'accept': 'application/json',
    'Authorization': `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
}



export const fetchMovies = async ({ query }: { query: string }) => {
  const url = query
    ? `${tmdb_config.base_url}search/movie?query=${encodeURIComponent(query)}`
    : `${tmdb_config.base_url}discover/movie?sort_by=popularity.desc`;

  const options = {
    method: 'GET',
    headers: {
      accept: tmdb_config.header.accept,
      Authorization: tmdb_config.header.Authorization,
    },
  };

  try {
    const res = await fetch(url, options); // استنى الفتش
    const json = await res.json(); // استنى تحويله لجسون
    // console.log(json.results); // ممكن تخليه عشان تشوف اللوج
    return json.results; // دلوقتي بيرجع Array
  } catch (err) {
    console.error(err);
    throw err; // لو حصل error هيوصل لـ useFetch
  }
};
