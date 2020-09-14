const API_KEY = "0eb730835de9ae54a8c47bf98593fd3a";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=es&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
  fetchToRated: `/movie/top_rated?api_key=${API_KEY}&language=en&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es`,
  fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36&language=es`,
};

export default requests;
