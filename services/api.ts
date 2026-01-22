

  export const tmdb_config = {
    base_url: 'https://api.themoviedb.org/3/',
    'api_key': process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    'header':{
        'accept': 'application/json',
        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}



export const fetchMovies = async ({query}: {query: string}) => {
const url = query ? `${tmdb_config.base_url}search/movie?query=${encodeURIComponent(query)}` :  `${tmdb_config.base_url}discover/movie?sort_by=popularity.desc`;
const options = {
  method: 'GET',
  headers: {
    accept: tmdb_config.header.accept,
    Authorization: tmdb_config.header.Authorization
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

}